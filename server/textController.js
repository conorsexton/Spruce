const md = require('marked');
const { primes, smartQuotes, apostrophes } = require('./typographyRules.js');

// const smartenQuotes = (string) => {
//   const dumbApostrophe = /(?<=[A-z])&#39;|'(?=\w)/gm;
//   const openingSingleQuote = /(?<=^|\W)('|&#39;)/gm;
//   const closingSingleQuote = /(?<!\d)('|&#39;)(?!\w)/gm;
//   string = string.replace(dumbApostrophe, '’');
//   string = string.replace(openingSingleQuote, '‘');
//   return string.replace(closingSingleQuote, '’');
// };

module.exports = {
  parseMarkdown: (req, res, next) => {
    res.locals.text = md(req.body);
    console.log(res.locals.text);
    next();
  },
  tuneTypography: (req, res, next) => {
    // For each rule in rules, if rule.enabled, rule.replace(text)
    res.locals.text = smartQuotes.replace(res.locals.text);
    res.locals.text = apostrophes.replace(res.locals.text);
    res.locals.text = primes.replace(res.locals.text);
    next();
  },
};
