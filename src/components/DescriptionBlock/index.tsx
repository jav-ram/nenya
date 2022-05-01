import React from 'react';

// eslint-disable-next-line import/no-cycle
import Element from '../Element';
import { ElementType } from '../Element/type';

import styles from './descriptionBlock.module.css';

type DescriptionBlockPropsType = {
  children: (string | ElementType)[],
};

const DescriptionBlock = ({ children }: DescriptionBlockPropsType) => (
  <div className={`${styles.descriptionBlock} DescriptionBlock`}>
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

export default DescriptionBlock;
