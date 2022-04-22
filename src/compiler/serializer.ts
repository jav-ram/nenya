import { Node } from 'slate';

const serialize = (nodes: Node[]) => nodes.map((n) => Node.string(n)).join('\n');

export default serialize;
