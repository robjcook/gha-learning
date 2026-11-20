const test = require('node:test');
const assert = require('node:assert/strict');
const { greet, add } = require('../src/greet');

test('greet uses the given name', () => {
  assert.equal(greet('Rob'), 'Hello, Rob!');
});

test('greet falls back to "world"', () => {
  assert.equal(greet(), 'Hello, world!');
  assert.equal(greet('   '), 'Hello, world!');
});

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});
