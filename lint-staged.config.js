export default {
  '*': 'prettier --write --ignore-unknown',
  '*.{js,ts,tsx}': 'eslint --fix',
  '*.{css,scss}': 'stylelint --fix',
}
