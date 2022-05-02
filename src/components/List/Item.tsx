import React from 'react';
// eslint-disable-next-line import/no-cycle
import Element from '../Element';
import { ElementType } from '../Element/type';

import styles from './list.module.css';

type ItemPropsType = {
  content: ElementType[],
};

const Item = ({ content }: ItemPropsType) => {
  const elements = content.filter((el) => el.type !== 'punctuation');
  return (
    <li className={styles.item}>
      { elements.map((props) => <Element {...props} />) }
    </li>
  );
};

export default Item;
