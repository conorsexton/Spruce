
/* eslint-disable quotes */
const wrapReplacement = (replacement, original, rule) => `<span class="typography" data-original="${original}" data-rule="${rule}">${replacement}</span>`;
const rules = {
  smartQuotes: {
    enabled: true,
    description: `Use smart quotes to improve legibility and visual rhythm`,
    replace: (string) => {
      const result = typeof string === 'object' ? string : {
        htmlToCopy: string,
        editorsCut: string,
      };
      const openingDoubleQuote = /(?<!&quot;)(?<=\s|^|>)&quot;(?=\w)/gm;
      const closingDoubleQuote = /&quot;(?=$|[.?!:\-–—\s<])/gm;
      const openingSingleQuote = /(?<=^|\W)('|&#39;)(?=.*?(&#39;)[\w<]|$)/gm;
      const closingSingleQuote = /(?<!\d)('|&#39;)(?!\w)/gm;
      result.htmlToCopy = result.htmlToCopy.replace(openingDoubleQuote, '“');
      result.editorsCut = result.editorsCut.replace(
        openingDoubleQuote,
        wrapReplacement('“', '"', 'smartQuotes'),
      );
      result.htmlToCopy = result.htmlToCopy.replace(closingDoubleQuote, '”');
      result.editorsCut = result.editorsCut.replace(
        closingDoubleQuote,
        wrapReplacement(`”`, `"`, `smartQuotes`),
      );
      result.htmlToCopy = result.htmlToCopy.replace(openingSingleQuote, `‘`);
      result.editorsCut = result.editorsCut.replace(
        openingSingleQuote,
        wrapReplacement(`‘`, `＇`, `smartQuotes`),
      );
      console.log('Text after opening single quote parsing:', result.htmlToCopy);
      result.htmlToCopy = result.htmlToCopy.replace(closingSingleQuote, `’`);
      result.editorsCut = result.editorsCut.replace(
        closingSingleQuote,
        wrapReplacement(`’`, `＇`, `smartQuotes`),
      );
      return result;
    },
  },
  primes: {
    enabled: true,
    description: `Use true prime and double prime glyphs (′,″) instead of apostrophes or quotes (',")`,
    replace: (string) => {
      const result = typeof string === 'object' ? string : {
        htmlToCopy: string,
        editorsCut: string,
      };
      const doublePrimes = /(?<=\d)(&#34;|(?:&#39;){2}|&quot;|"|'')/gm;
      const singlePrimes = /(?<=\d)('|&#39;){1}/gm;
      result.htmlToCopy = result.htmlToCopy.replace(doublePrimes, '″');
      result.editorsCut = result.editorsCut.replace(
        doublePrimes,
        wrapReplacement('″', '"', 'primes'),
      );
      result.htmlToCopy = result.htmlToCopy.replace(singlePrimes, '′');
      result.editorsCut = result.editorsCut.replace(
        singlePrimes,
        wrapReplacement('′', `'`, 'primes'),
      );
      return result;
    },
  },
  apostrophes: {
    enabled: true,
    description: `Use proper apostrophes to improve visual rhythm and legibility`,
    replace: (string) => {
      const result = typeof string === 'object' ? string : {
        htmlToCopy: string,
        editorsCut: string,
      };
      const apostrophe = /(?<=[A-z\s])&#39;|'(?=\w)/gm;
      result.htmlToCopy = result.htmlToCopy.replace(apostrophe, '’');
      result.editorsCut = result.editorsCut.replace(
        apostrophe,
        wrapReplacement('’', '＇', 'apostrophes'),
      );
      return result;
    },
  },
};


module.exports = rules;
