const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.text())

app.post('/api/parse', (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000);

module.exports = app;
