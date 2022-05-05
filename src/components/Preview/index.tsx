import React, { useEffect, useState } from 'react';
import { Token, TokenStream } from 'prismjs';

import tokenize from '../../compiler';

import Page from '../Page';
import { ElementNameTypes, ElementType } from '../Element/type';
import styles from './preview.module.css';

type PreviewPropsType = {
  value: string,
};

const parser = (tokens: TokenStream): ElementType[] => {
  const tree: ElementType[] = [];

  if (typeof tokens === 'string') {
    // TODO: chekc if the string is empty
    tree.push({
      type: 'txt',
      content: tokens,
    });
  } else if (typeof tokens !== 'string' && !Array.isArray(tokens)) {
    tree.push({
      type: tokens.type as ElementNameTypes,
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
    const tokens: ElementType[] = tokenize(value)
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
      <style>
        { /* here will be the custom css if you want */ }
        {}
      </style>
      { compiledContent.map(({ content }, page) => (
        <Page key={`page-${page + 1}`} page={page + 1} content={content as ElementType[]} />
      ))}
    </div>
  );
};

export default Preview;
