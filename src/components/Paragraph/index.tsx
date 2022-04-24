import React from 'react';

// eslint-disable-next-line import/no-cycle
import Element from '../Element';
import { ElementType } from '../Element/type';

import styles from './paragraph.module.css';

type ParagraphPropsType = {
  children: (string | ElementType)[] | string | ElementType,
  isElegant?: boolean,
};

type PPropsType = {
  children: React.ReactNode,
  isElegant?: boolean,
};

const P = ({ children, isElegant }: PPropsType) => (
  <p className={`${styles.paragraph} ${isElegant && styles.elegant} p`}>{ children }</p>
);

const Paragraph = ({ children, ...props }: ParagraphPropsType) => {
  if (typeof children === 'string') {
    return <P {...props}>{ children }</P>;
  }
  if (Array.isArray(children)) {
    return (
      <P {...props}>
        {
          children.map((c) => <Element {...c as ElementType} />)
        }
      </P>
    );
  }
  if (Array.isArray(children.content)) {
    return (
      <P {...props}>
        {
          children.content.map((c) => <Element {...c as ElementType} />)
        }
      </P>
    );
  }
  return (
    <P {...props}>
      <Element {...children} />
    </P>
  );
};

export default Paragraph;
