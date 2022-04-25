import Prism from 'prismjs';
import 'prismjs/components/prism-markdown';

const inlineLanguage = Prism.languages.extend('markdown', {});

const tokenize = (md: string) => {
  Prism.languages.markdown = Prism.languages.insertBefore('markdown', 'comment', {
    page: {
      pattern: /(\{\{([^]*)\}\})/gm,
      alias: 'page',
      inside: {
        punctuation: /{{|}}$/,
        ...Prism.languages.markdown,
      },
    },
    innerBlock: {
      pattern: /(\{([^}}]*)\})/m,
      alias: 'innerBlock',
      inside: {
        punctuation: /{|}$/,
        ...Prism.languages.markdown,
      },
    },
  });
  Prism.languages.markdown = Prism.languages.insertBefore('markdown', 'blockquote', {
    heading1: {
      pattern: /^#(?!#)(.*)/m,
      alias: 'important',
      inside: {
        punctuation: /^#+/,
      },
    },
    heading2: {
      pattern: /^#{2}(?!#)(.*)/m,
      alias: 'important',
      inside: {
        punctuation: /^#+/,
      },
    },
    heading3: {
      pattern: /^#{3}(?!#)(.*)/m,
      alias: 'important',
      inside: {
        punctuation: /^#+/,
      },
    },
    elegantParagraph: {
      pattern: /&[^\r\n]+/g,
      lookbehind: true,
      inside: {
        punctuation: /&[\s]*|(\n)+|(\r)+/g,
        ...inlineLanguage,
      },
    },
    paragraph: {
      pattern: /[^\r\n]+((\r|\n|\r\n)[^\r\n]+)*/g,
      lookbehind: true,
      inside: {
        punctuation: /(\n)+|(\r)+/g,
        ...inlineLanguage,
      },
    },
  });
  const tokens = Prism.tokenize(md, Prism.languages.markdown);
  return tokens;
};

export default tokenize;
