import React from 'react';

// eslint-disable-next-line import/no-cycle
import Element from '../Element';
import { ElementType } from '../Element/type';

import styles from './innerBlock.module.css';

type InnerBlockPropsType = {
  children: (string | ElementType)[],
};

const InnerBlock = ({ children }: InnerBlockPropsType) => (
  <div className={`${styles.innerBlock} innerBlock`}>
    { children.map((element) => {
      if (typeof element === 'string') {
        <Element type="txt" content={[element]} />;
      } else {
        return <Element {...element} />;
      }
      return null;
    }) }
  </div>
);

export default InnerBlock;
