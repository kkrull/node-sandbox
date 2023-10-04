module.exports = {
  default: {
    format: ['@cucumber/pretty-formatter'],
    require: ['features/**/*.ts'],
    requireModule: ['ts-node/register', 'tsconfig-paths/register'],
  },
};
