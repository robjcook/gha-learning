const test = require('node:test');
const assert = require('node:assert/strict');
const { createServer } = require('../src/app');

test('HTTP endpoints', async (t) => {
  const server = createServer().listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  const base = `http://localhost:${server.address().port}`;
  t.after(() => server.close());

  await t.test('GET /health returns ok', async () => {
    const res = await fetch(`${base}/health`);
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { status: 'ok' });
  });

  await t.test('GET /?name=Ada greets Ada', async () => {
    const res = await fetch(`${base}/?name=Ada`);
    assert.deepEqual(await res.json(), { message: 'Hello, Ada!' });
  });

  await t.test('unknown path returns 404', async () => {
    const res = await fetch(`${base}/nope`);
    assert.equal(res.status, 404);
  });
});
