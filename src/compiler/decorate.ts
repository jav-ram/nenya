import { Token } from 'prismjs';
import {
  Node, NodeEntry, Text, BaseRange,
} from 'slate';
import tokenize from '.';

const decorate = (nodeEntry: NodeEntry<Node>): BaseRange[] => {
  const [node, path] = nodeEntry;
  const ranges: BaseRange[] = [];

  if (!Text.isText(node)) {
    return ranges;
  }

  const getLength = (token: string | Token): number => {
    if (typeof token === 'string') {
      return token.length;
    }
    if (typeof token.content === 'string') {
      return token.content.length;
    }
    if (Array.isArray(token.content)) {
      return token.content.reduce((l, t) => l + getLength(t), 0);
    }
    return 0;
  };

  const tokens = tokenize(node.text);
  let start = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const token of tokens) {
    const length = getLength(token);
    const end = start + length;

    if (typeof token !== 'string') {
      ranges.push({
        // @ts-ignore
        type: token.type,
        [token.type]: true,
        anchor: { path, offset: start },
        focus: { path, offset: end },
      });
    }

    start = end;
  }

  return ranges;
};

export default decorate;
