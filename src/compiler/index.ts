import Prism from 'prismjs';
import TTRPG_LANG from './language';

const tokenize = (md: string) => {
  const tokens = Prism.tokenize(md, TTRPG_LANG.getInstance());
  return tokens;
};

export default tokenize;
