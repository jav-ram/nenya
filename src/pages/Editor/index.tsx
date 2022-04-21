import React from 'react';

import Editor from '../../components/Editor';

const EditorPage = () => (
  <Editor onChange={(v) => console.log(v)} />
);

export default EditorPage;
