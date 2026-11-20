function greet(name) {
  const who = typeof name === 'string' && name.trim() ? name.trim() : 'world';
  return `Hello, ${who}!`;
}

function add(a, b) {
  return a + b;
}

module.exports = { greet, add };
