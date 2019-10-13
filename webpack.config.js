const path = require('path');
module.exports = function(options) {
  return {
    ...options,
    resolve: {
      ...options.resolve,
      alias: {
        "@sample": path.resolve(__dirname, './src')
      }
    }
  };
}
