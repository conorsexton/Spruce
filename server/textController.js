const md = require('marked');
const { smartQuotes, primes, apostrophes } = require('./typographyRules.js');
const { dates } = require('./semantics.js');

module.exports = {
  parseMarkdown: (req, res, next) => {
    res.locals.text = md(req.body);
    next();
  },
  tuneTypography: (req, res, next) => {
    // For each rule in rules, if rule.enabled, rule.replace(text)
    res.locals.text = smartQuotes.replace(res.locals.text);
    res.locals.text = apostrophes.replace(res.locals.text);
    console.log(res.locals.text.editorsCut);
    res.locals.text = primes.replace(res.locals.text);
    res.locals.text = dates.process(res.locals.text);
    next();
  },
};
