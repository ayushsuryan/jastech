const express = require('express');
const app = express();
const port = 3000;

app.get('/status', (req, res) => {
  res.json({ status: 'running yes' });
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});
