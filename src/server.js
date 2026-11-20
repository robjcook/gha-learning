const { createServer } = require('./app');

const port = Number(process.env.PORT) || 3000;
createServer().listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
