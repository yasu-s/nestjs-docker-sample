const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = function(options) {
  return {
    ...options,
    resolve: {
      ...options.resolve,
      plugins: [new TsconfigPathsPlugin()]
    },
    plugins: [ ...options.plugins, new Dotenv() ]
  };
}
