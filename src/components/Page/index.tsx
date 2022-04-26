import * as _ from 'lodash';
import React, { useState, useEffect } from 'react';
import Element from '../Element';
import { ElementType } from '../Element/type';
import Footer from './footer';

import BackgroundImage from '../../assets/images/page.jpeg';
import styles from './page.module.css';

type PagePropsType = {
  content: ElementType[],
  page: number,
};

const Page = ({ content, page }: PagePropsType) => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const img = new Image();
    img.onload = ({ currentTarget }) => {
      // @ts-ignore
      const width = currentTarget.naturalWidth;
      setOffset(_.random(816 / 2, width - 816 / 2));
    };
    img.src = BackgroundImage;
  }, []);
  return (
    <div
      className={styles.pageContainer}
      style={{
        backgroundPositionX: `${offset}px`,
      }}
    >
      <div className={styles.page}>
        { /* eslint-disable-next-line react/no-array-index-key */ }
        { content.map((element, idx) => <Element key={`page-${idx}`} {...element} />) }
      </div>
      <Footer page={page} />
    </div>
  );
};

export default Page;
