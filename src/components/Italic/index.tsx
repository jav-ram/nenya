import React from 'react';

// eslint-disable-next-line import/no-cycle
import Element from '../Element';
import { ElementType } from '../Element/type';

import styles from './italic.module.css';

type ItalicPropsType = {
  children: string | ElementType,
};

type IPropsType = {
  children: React.ReactNode,
};

const I = ({ children }: IPropsType) => (
  <i className={`italic ${styles.italic}`}>{ children }</i>
);

const Bold = ({ children }: ItalicPropsType) => {
  if (typeof children === 'string') {
    return <I>{ children }</I>;
  }
  if (Array.isArray(children.content)) {
    return (
      <I>
        {
          children.content.map((c) => <Element {...c as ElementType} />)
        }
      </I>
    );
  }
  return (
    <I>
      <Element {...children} />
    </I>
  );
};

export default Bold;
