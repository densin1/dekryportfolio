const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('index.html', 'utf8');
// Translations and the Telegram link helpers, from the real inline script (everything before render).
const src = html.split('<script>\nvar D=')[1].split('function R(l){')[0];
const ctx = {};
vm.runInNewContext('var D=' + src + ';this.D=D;this.TG=TG;this.TA=TA;', ctx);
const { D, TG, TA } = ctx;
const draft = href => {
  const u = new URL(href);
  assert.equal(u.origin + u.pathname, 'https://t.me/des1n');
  assert.deepEqual([...u.searchParams.keys()], ['text']);
  return u.searchParams.get('text');
};

test('every language has a draft for every button kind', () => {
  for (const l of ['uk', 'ru', 'en']) {
    for (const k of ['g', 's', 'p', 'o', 'w']) assert.ok(D[l].tg[k], `${l}.${k}`);
    for (const k of ['s', 'p', 'o', 'w']) assert.ok(D[l].tg[k].includes('%s'), `${l}.${k} names the item`);
    assert.ok(!D[l].tg.g.includes('%s'));
  }
});

test('package drafts name the package in the current language and survive URL encoding', () => {
  assert.equal(draft(TG('uk', 'p', D.uk.pk[1][0])), 'Привіт! Хочу пакет «Ріст».');
  assert.equal(draft(TG('ru', 'p', D.ru.pk[1][0])), 'Привет! Хочу пакет «Рост».');
  assert.equal(draft(TG('en', 'p', D.en.pk[1][0])), 'Hi! I’d like the “Growth” package.');
  const href = TG('uk', 'p', 'Ріст');
  assert.match(href, /^https:\/\/t\.me\/des1n\?text=[A-Za-z0-9%\-_.!~*'()]+$/, 'only URL-safe characters');
});

test('work, service, order and general drafts', () => {
  assert.equal(draft(TG('uk', 'w', D.uk.wk[2][0])), 'Привіт! Хочу так само, як у роботі «Серія Reels для особистого бренду».');
  assert.equal(draft(TG('en', 's', D.en.sx[1][0])), 'Hi! I’m interested in “Telegram bots”.');
  assert.equal(draft(TG('ru', 'o', D.ru.oo[0][0])), 'Привет! Хочу заказать «Reels / Shorts / TikTok».');
  assert.equal(draft(TG('en', 'g')), 'Hi! I’d like to discuss a project.');
  // Titles with & / : $ must not break the query string.
  assert.equal(draft(TG('en', 'o', 'A & B: $5 / #1?')), 'Hi! I’d like to order “A & B: $5 / #1?”.');
});

test('analytics item names are English for every language', () => {
  assert.equal(TA('p', 1), 'Growth');
  assert.equal(TA('s', 3), 'Websites');
  assert.equal(TA('o', 5), 'Telegram bot');
  assert.equal(TA('w', 8), 'YouTube: top ways to earn money');
});

test('every Telegram link on the page is tagged for click analytics', () => {
  const tags = html.match(/<a [^>]*href="https:\/\/t\.me\/des1n[^"]*"[^>]*>/g);
  for (const a of tags) assert.match(a, /data-tg=/, a);
  // Rendered links (services, packages, one-off orders) carry data-tg via TGA().
  assert.equal((html.match(/TGA\('(s|p|o)'/g) || []).length, 4);
  assert.ok(!/href="https:\/\/t\.me\/des1n"'/.test(html), 'no untagged template links');
});
