/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import * as _ from 'lodash';
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
      className={`${styles.page} page`}
      style={{
        backgroundPositionX: `${offset}px`,
      }}
    >
      <div className={`${styles.pageContent} pageContent`}>
        { content.map((element, idx) => <Element key={`element-${idx}`} {...element} />)}
      </div>
      <Footer page={page} />
    </div>
  );
};

export default Page;
