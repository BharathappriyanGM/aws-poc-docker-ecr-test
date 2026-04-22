const express = require('express');
const app = express();
const PORT = 8080;

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SGINDIATECH - AWS-POC</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #1a1a1a;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }
        h1 {
          color: #ffffff;
          font-size: 4rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        h2 {
          color: #a0a0a0;
          font-size: 1.5rem;
          font-weight: 400;
          letter-spacing: 0.2em;
        }
      </style>
    </head>
    <body>
      <h1>SGINDIATECH</h1>
      <h2>AWS-POC</h2>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});