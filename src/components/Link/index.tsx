import React from 'react';

// eslint-disable-next-line import/no-cycle
import Element from '../Element';
import { ElementType } from '../Element/type';

import styles from './link.module.css';

type LinkPropsType = {
  children: ElementType,
  href: string,
};

type APropsType = {
  children: React.ReactNode,
  href: string,
};

const A = ({ children, href }: APropsType) => (
  <a
    className={`${styles.link} link`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    { children }
  </a>
);

const Link = ({ children, href }: LinkPropsType) => {
  if (children.type === 'txt') {
    return <A href={href}>{ children.content }</A>;
  }
  if (Array.isArray(children.content)) {
    return (
      <A href={href}>
        {
          children.content.map((c) => {
            if (c.type === 'txt') {
              return <Element type="txt" content={c.content} />;
            }
            return <Element {...c as ElementType} />;
          })
        }
      </A>
    );
  }

  return (
    <A href={href}>
      <Element {...children} />
    </A>
  );
};

export default Link;
