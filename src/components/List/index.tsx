import React from 'react';

// eslint-disable-next-line import/no-cycle
import Item from './Item';
import { ElementType } from '../Element/type';

import styles from './list.module.css';

type ListPropsType = {
  content: ElementType[],
};

// TODO: support order listing
const List = ({ content }: ListPropsType) => {
  const sanitized: ElementType[] = content
    .filter((element) => element.type === 'txt' || element.type === 'item')
    .map<ElementType>((element) => {
    if (typeof element === 'string') {
      return { type: 'txt', content: element } as ElementType;
    }
    return element as ElementType;
  });
  return (
    <ul className={`${styles.list} list`}>
      {sanitized.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item key={`item-${index}`} content={element.content as ElementType[]} />
      ))}
    </ul>
  );
};

export default List;
