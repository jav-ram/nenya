import React from 'react';

// eslint-disable-next-line import/no-cycle
import Element from '../Element';
import { ElementType } from '../Element/type';

import styles from './innerBlock.module.css';

type InnerBlockPropsType = {
  children: ElementType[],
};

const InnerBlock = ({ children }: InnerBlockPropsType) => (
  <div className={`${styles.innerBlock} innerBlock`}>
    { children.map((element) => {
      if (element.type === 'txt') {
        <Element type="txt" content={element.content} />;
      } else {
        return <Element {...element} />;
      }
      return null;
    }) }
  </div>
);

export default InnerBlock;
