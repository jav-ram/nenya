import React from 'react';
import Element from '../Element';
import { ElementType } from '../Element/type';

import styles from './page.module.css';

type PagePropsType = {
  content: ElementType[],
};

const Page = ({ content }: PagePropsType) => (
  <div className={styles.page}>
    { content.map((element) => <Element {...element} />) }
  </div>
);

export default Page;
