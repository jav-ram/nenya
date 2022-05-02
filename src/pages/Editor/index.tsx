import React, { useCallback, useState } from 'react';
import { SplitPane } from 'react-multi-split-pane';
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
    <SplitPane
      className={styles.Pane}
      split="vertical"
      defaultSizes={[50, 50]}
      minSize={10}
    >
      <Editor onChange={onChange} />
      <Preview value={serializer(value)} />
    </SplitPane>
  );
};

export default EditorPage;
