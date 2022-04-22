import React, { useCallback, useState } from 'react';
import { Node } from 'slate';

import Editor from '../../components/Editor';
import Preview from '../../components/Preview';
import serialize from '../../compiler/serializer';

import styles from './editor.module.css';

const EditorPage = () => {
  const [value, setValue] = useState<Node[]>([]);
  const onChange = useCallback((v: any) => setValue(v), [value]);
  const serializer = useCallback(serialize, [value]);

  return (
    <div className={styles.container}>
      <Editor onChange={onChange} />
      <Preview value={serializer(value)} />
    </div>
  );
};

export default EditorPage;
