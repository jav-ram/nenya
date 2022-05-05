import React from 'react';

// eslint-disable-next-line import/no-cycle
import Element from '../Element';
import { ElementType } from '../Element/type';

import styles from './descriptionBlock.module.css';

type DescriptionBlockPropsType = {
  children: ElementType[],
};

const DescriptionBlock = ({ children }: DescriptionBlockPropsType) => (
  <div className={`${styles.descriptionBlock} DescriptionBlock`}>
    { children.map((element) => <Element {...element} />) }
  </div>
);

export default DescriptionBlock;
