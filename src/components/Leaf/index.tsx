import React from 'react';
import { RenderLeafProps } from 'slate-react';

import styles from './leaf.module.css';

// TODO: allow multiple types of inline
const Leaf = ({
  attributes,
  children,
  leaf,
}: RenderLeafProps) => (
  <span {...attributes} className={`${leaf.type && styles[leaf.type]} ${leaf.type}}`}>
    {children}
  </span>
);

export default Leaf;
