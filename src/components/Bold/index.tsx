import React from 'react';

// eslint-disable-next-line import/no-cycle
import Element from '../Element';
import { ElementType } from '../Element/type';

import styles from './bold.module.css';

type BoldPropsType = {
  children: string | ElementType,
};

type BPropsType = {
  children: React.ReactNode,
};

const B = ({ children }: BPropsType) => (
  <b className={`${styles.bold} bold`}>{ children }</b>
);

const Bold = ({ children }: BoldPropsType) => {
  if (typeof children === 'string') {
    return <B>{ children }</B>;
  }
  if (Array.isArray(children.content)) {
    return (
      <B>
        {
          children.content.map((c) => <Element {...c as ElementType} />)
        }
      </B>
    );
  }
  return (
    <B>
      <Element {...children} />
    </B>
  );
};

export default Bold;
