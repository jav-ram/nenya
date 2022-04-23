import React from 'react';

import styles from './heading.module.css';

type HeadingPropsType = {
  children: string,
};

export const Heading1 = ({
  children,
}: HeadingPropsType) => (
  <h1 className={`h1 ${styles.heading} ${styles.h1}`}>{ children }</h1>
);

export const Heading2 = ({
  children,
}: HeadingPropsType) => (
  <h2 className={`h2 ${styles.heading} ${styles.h2}`}>{ children }</h2>
);

export const Heading3 = ({
  children,
}: HeadingPropsType) => (
  <h3 className={`h3 ${styles.heading} ${styles.h3}`}>{ children }</h3>
);
