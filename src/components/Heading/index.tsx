import React from 'react';

import styles from './heading.module.css';

type HeadingPropsType = {
  children: string,
};

export const Heading1 = ({
  children,
}: HeadingPropsType) => (
  <h1 className={`${styles.h1} ${styles.heading} h1`}>{ children }</h1>
);

export const Heading2 = ({
  children,
}: HeadingPropsType) => (
  <h2 className={`${styles.h2} ${styles.heading} h2`}>{ children }</h2>
);

export const Heading3 = ({
  children,
}: HeadingPropsType) => (
  <h3 className={`${styles.h3} ${styles.heading} h3`}>{ children }</h3>
);

export const Heading4 = ({
  children,
}: HeadingPropsType) => (
  <h4 className={`${styles.h4} ${styles.heading} h4`}>{ children }</h4>
);
