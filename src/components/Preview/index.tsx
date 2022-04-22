import React, { useEffect, useState } from 'react';
import { Token, TokenStream } from 'prismjs';

import tokenize from '../../compiler';

import styles from './preview.module.css';
import Page from '../Page';
import { ElementType } from '../Element/type';

type PreviewPropsType = {
  value: string,
};

const parser = (tokens: TokenStream): ElementType[] => {
  const tree: ElementType[] = [];

  if (typeof tokens === 'string') {
    // TODO: chekc if the string is empty
    tree.push({
      type: 'txt',
      content: [tokens],
    });
  } else if (typeof tokens !== 'string' && !Array.isArray(tokens)) {
    tree.push({
      type: tokens.type,
      content: parser(tokens.content),
    });
  } else if (Array.isArray(tokens)) {
    for (let i = 0; i < tokens.length; i += 1) {
      tree.push(...parser(tokens[i]));
    }
  }

  return tree;
};

const Preview = ({
  value,
}: PreviewPropsType) => {
  const [compiledContent, setCompiledContent] = useState<ElementType[]>([]);
  useEffect(() => {
    // compile content
    const tokens = tokenize(value)
      .filter((tkn): tkn is Token => typeof tkn !== 'string' && tkn.type === 'page')
      .map((tkn) => ({ type: 'page', content: parser(tkn.content) }));
    if (tokens.length > 0) {
      setCompiledContent(tokens);
      return;
    }
    setCompiledContent([]);
  }, [value]);
  return (
    <div className={styles.previewContainer}>
      { compiledContent.map(({ content }) => (
        <Page content={content as ElementType[]} />
      ))}
    </div>
  );
};

export default Preview;
