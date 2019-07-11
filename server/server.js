const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const { parseMarkdown, tuneTypography } = require('./textController.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.text());

app.post('/api/parse', parseMarkdown, tuneTypography, (req, res) => {
  res.json(res.locals.text);
});

app.listen(PORT);

module.exports = app;
