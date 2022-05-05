// eslint-disable-next-line no-useless-escape
const multi = /((?:^\s*)([\w#.@*,:\-.:>,*\s]+)\s*{(?:[\s]*)((?:[A-Za-z\- \s]+[:]\s*['"0-9\w .,\/()\-!%]+;?)*)*\s*}(?:\s*))+/mi;

const validate = (css: string) => multi.test(css);

export default validate;
