const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>What is Flutter?</title>
    </head>
    <body>
      <h1>Understanding Flutter</h1>
      <p>Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

