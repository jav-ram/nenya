import React, { useState } from 'react';

import styles from './editor.module.css';

type EditorPropsType = {
  initialValue?: string,
  onChange: (value: string) => void,
};

const Editor = ({
  initialValue = '',
  onChange,
}: EditorPropsType) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div
      className={styles.editorContainer}
    >
      <div
        className={styles.editor}
        onChange={({ currentTarget: { nodeValue: v } }) => {
          // for the inner state
          setValue(v || '');
          // for use outside the component
          onChange(v || '');
        }}
        contentEditable
      >
        {value}
      </div>
    </div>
  );
};

export default Editor;
