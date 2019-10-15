const Dotenv = require('dotenv-webpack');

module.exports = function(options) {
  return {
    ...options,
    plugins: [ ...options.plugins, new Dotenv() ]
  };
}
