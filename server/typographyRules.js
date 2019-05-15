
/* eslint-disable quotes */
const wrapReplacement = (replacement, original, rule) => `<span class="typography" data-original="${original}" data-rule="${rule}">${replacement}</span>`;
const rules = {
  primes: {
    enabled: true,
    description: `Use true prime and double prime glyphs (′,″) instead of apostrophes or quotes (',")`,
    replace: (string) => {
      const result = {
        htmlToCopy: string,
        editorsCut: string,
      };
      const doublePrimes = /(?<=\d)(&#34;|(?:&#39;){2}|&quot;|"|'')/gm;
      const singlePrimes = /(?<=\d)('|&#39;|’){1}/gm;
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
      // let match = doublePrimes.exec(string);
      // while (match) {
      //   result.htmlToCopy = result.htmlToCopy.replace(match[0], '″');
      //   result.editorsCut = result.editorsCut.replace(
      //     match[0],
      //     wrapReplacement('″', match[0], 'primes'),
      //   );
      //   // if (result.editorsCut) result.editorsCut += replacement;
      //   // else result.editorsCut = replacement;
      //   match = doublePrimes.exec(string);
      // }
      // match = singlePrimes.exec(string);
      // while (match) {
      //   result.editorsCut.replace(
      //     match[0],
      //     wrapReplacement('′', match[0], 'primes'),
      //   );
      //   // if (result.editorsCut) result.editorsCut += replacement;
      //   // else result.editorsCut = replacement;
      // }
      return result;
    },
  },
};

module.exports = rules;
