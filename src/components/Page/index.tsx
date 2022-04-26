import React from 'react';

import Element from '../Element';
import { ElementType } from '../Element/type';
import Footer from './footer';

import styles from './page.module.css';

type PagePropsType = {
  content: ElementType[],
  page: number,
};

const Page = ({ content, page }: PagePropsType) => (
  <div
    className={styles.pageContainer}
  >
    <div className={styles.page}>
      { content.map((element) => <Element {...element} />) }
    </div>
    <Footer page={page} />
  </div>
);

export default Page;
