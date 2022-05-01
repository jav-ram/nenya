import _ from 'lodash';
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown';

const TTRPG_LANG = (() => {
  let ttrpgLanguage = {};

  const createInstance = () => {
    // @ts-ignore
    delete Prism.languages.markdown.title;
    const inline = Prism.languages.markdown;
    Prism.languages.markdown = Prism.languages.insertBefore('markdown', 'blockquote', {
      heading1: {
        pattern: /^#(?!#)(.*)/m,
        alias: 'important',
        inside: {
          punctuation: /^#/,
        },
      },
      heading2: {
        pattern: /^#{2}(?!#)(.*)/m,
        alias: 'important',
        inside: {
          punctuation: /^##/,
        },
      },
      heading3: {
        pattern: /^#{3}(?!#)(.*)/m,
        alias: 'important',
        inside: {
          punctuation: /^###/,
        },
      },
      heading4: {
        pattern: /^#{4}(?!#)(.*)/m,
        alias: 'important',
        inside: {
          punctuation: /^####/,
        },
      },
      elegantParagraph: {
        pattern: /&[^\r\n]+/gm,
        lookbehind: true,
        inside: {
          punctuation: /&[\s]*|(\n)+|(\r)+/,
          ...inline,
        },
      },
      paragraph: {
        pattern: /[^\r\n]+/gm,
        inside: {
          punctuation: /(\n)+|(\r)+/,
          ...inline,
        },
      },
    });
    Prism.languages.markdown = Prism.languages.insertBefore('markdown', 'comment', {
      page: {
        pattern: /\{\{([^]*?)\}\}/gm,
        alias: 'page',
        inside: {
          punctuation: /^{{|}}$/,
          innerBlock: {
            pattern: /\{[^}]*\}/m,
            inside: {
              punctuation: /{|}/,
              ...Prism.languages.markdown,
            },
          },
          descriptionBlock: {
            pattern: /^[[][^\]]*\](?!\()/gm,
            lookbehind: true,
            greedy: true,
            inside: {
              punctuation: /\[|\]/,
              ...Prism.languages.markdown,
            },
          },
          ...Prism.languages.markdown,
        },
      },
    });
    return Prism.languages.markdown;
  };

  return {
    getInstance: () => {
      if (_.isEmpty(ttrpgLanguage)) {
        ttrpgLanguage = createInstance();
        console.log(ttrpgLanguage);
      }
      return ttrpgLanguage;
    },
  };
})();

export default TTRPG_LANG;
