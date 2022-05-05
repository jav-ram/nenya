import React, { useCallback, useMemo } from 'react';
import { createEditor, BaseEditor, Descendant } from 'slate';
import {
  Editable, Slate, withReact, ReactEditor, RenderLeafProps,
} from 'slate-react';

import decorate from '../../compiler/decorate';
import { CustomElement, CustomText } from './types';
import Leaf from '../Leaf';

import styles from './editor.module.css';

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText,
  }
}

type EditorPropsType = {
  onChange: (value: Descendant[]) => void,
};

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

const Editor = ({
  onChange,
}: EditorPropsType) => {
  const editor = useMemo(
    () => withReact(createEditor()),
    [],
  );
  const editorDecorate = useCallback(decorate, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);
  return (
    <div
      className={styles.editorContainer}
    >
      <Slate
        editor={editor}
        value={initialValue}
        onChange={(e) => {
          onChange(e);
        }}
      >
        <Editable decorate={editorDecorate} renderLeaf={renderLeaf} />
      </Slate>
    </div>
  );
};

export default Editor;
