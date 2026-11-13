const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('index.html', 'utf8');
const enhancements = html.split('/* ---- v2 enhancements ---- */')[1].split('</script>')[0];

// Execute the real inline enhancement code, without animations or network dependencies.
function headerPage({ height = 812, y = 0 } = {}) {
  const listeners = new Map();
  const frames = [];
  const classes = new Set();
  const menu = { hidden: true };
  const toggle = (name, on) => on ? classes.add(name) : classes.delete(name);
  const header = {
    classList: { add: name => classes.add(name), remove: name => classes.delete(name), toggle },
    contains: element => element === header,
    addEventListener: (name, fn) => listeners.set(`header:${name}`, fn),
  };
  const button = { addEventListener: (name, fn) => listeners.set(`button:${name}`, fn) };
  const floating = { classList: { toggle() {} } };
  const document = {
    activeElement: null,
    documentElement: { scrollHeight: 6000 },
    querySelector: selector => ({ header, '.mb': button, '.fl': floating })[selector],
    getElementById: () => menu,
  };
  const context = {
    document, scrollY: y, innerHeight: height, innerWidth: 375,
    matchMedia: () => ({ matches: true }),
    addEventListener: (name, fn) => listeners.set(name, fn),
    requestAnimationFrame: fn => frames.push(fn),
  };
  context.window = context;
  vm.runInNewContext(enhancements, context);
  const event = name => {
    const listener = listeners.get(name);
    if (listener) listener();
    while (frames.length) frames.shift()();
  };
  return {
    context, menu,
    hidden: () => classes.has('hd'),
    scroll(y) { context.scrollY = y; event('scroll'); },
    event,
    focus() { document.activeElement = header; event('header:focusin'); },
    blur() { document.activeElement = null; },
  };
}

test('8px direction changes do not repeatedly hide and show the header', () => {
  const page = headerPage();
  page.scroll(850);
  assert.equal(page.hidden(), true);
  page.scroll(800);
  assert.equal(page.hidden(), false);
  for (const y of [808, 800, 808, 800]) {
    page.scroll(y);
    assert.equal(page.hidden(), false, `header must remain visible at ${y}px`);
  }
});

test('sustained down/up gestures still hide and reveal, including small scroll frames', () => {
  const page = headerPage();
  page.scroll(850);
  assert.equal(page.hidden(), true);
  for (let y = 849; y >= 834; y--) page.scroll(y);
  assert.equal(page.hidden(), false);
  for (let y = 835; y <= 882; y++) page.scroll(y);
  assert.equal(page.hidden(), true);
  page.scroll(0);
  assert.equal(page.hidden(), false);
});

test('bottom rubber-band overscroll cannot reveal a header hidden by scrolling down', () => {
  const page = headerPage();
  const bottom = page.context.document.documentElement.scrollHeight - page.context.innerHeight;
  page.scroll(bottom);
  assert.equal(page.hidden(), true);
  page.scroll(bottom + 80);
  page.scroll(bottom);
  assert.equal(page.hidden(), true);
});

test('an open menu stays visible and does not retain scroll travel after closing', () => {
  const page = headerPage();
  page.scroll(850);
  page.menu.hidden = false;
  page.event('button:click');
  assert.equal(page.hidden(), false);
  page.scroll(1000);
  assert.equal(page.hidden(), false);
  page.menu.hidden = true;
  page.scroll(1008);
  assert.equal(page.hidden(), false);
});

test('keyboard focus immediately reveals the header and keeps it visible', () => {
  const page = headerPage();
  page.scroll(850);
  assert.equal(page.hidden(), true);
  page.focus();
  assert.equal(page.hidden(), false);
  page.scroll(1000);
  assert.equal(page.hidden(), false);
});

test('orientation/width changes reset the scroll baseline and reveal controls', () => {
  const page = headerPage();
  page.scroll(850);
  assert.equal(page.hidden(), true);
  page.context.innerHeight = 375;
  page.context.innerWidth = 812;
  page.event('resize');
  assert.equal(page.hidden(), false);
  page.scroll(858);
  assert.equal(page.hidden(), false);
});

test('height-only browser chrome changes do not flash a hidden header', () => {
  const page = headerPage();
  page.scroll(850);
  assert.equal(page.hidden(), true);
  page.context.innerHeight = 740;
  page.event('resize');
  assert.equal(page.hidden(), true);
  page.scroll(842);
  assert.equal(page.hidden(), true);
  page.scroll(834);
  assert.equal(page.hidden(), false);
});

test('reduced motion keeps the header visually visible', () => {
  assert.match(html, /@media\(prefers-reduced-motion:reduce\)\{[^}]+\}header\.hd\{transform:none\}/);
});
