import React from 'react';

// eslint-disable-next-line import/no-cycle
import Element from '../Element';
import { ElementType } from '../Element/type';

import styles from './paragraph.module.css';

type ParagraphPropsType = {
  children: (string | ElementType)[] | string | ElementType,
};

type PPropsType = {
  children: React.ReactNode,
};

const P = ({ children }: PPropsType) => (
  <p className={`p ${styles.paragraph}`}>{ children }</p>
);

const Paragraph = ({ children }: ParagraphPropsType) => {
  if (typeof children === 'string') {
    return <P>{ children }</P>;
  }
  if (Array.isArray(children)) {
    return (
      <P>
        {
          children.map((c) => <Element {...c as ElementType} />)
        }
      </P>
    );
  }
  if (Array.isArray(children.content)) {
    return (
      <P>
        {
          children.content.map((c) => <Element {...c as ElementType} />)
        }
      </P>
    );
  }
  return (
    <P>
      <Element {...children} />
    </P>
  );
};

export default Paragraph;
