module.exports = {
    plugins: {
      'postcss-import': {},
      'postcss-cssnext': {
        browsers: ['Android >= 4.4', 'Chrome >= 35', 'iOS >= 8', 'Safari >= 7.1']
      },
      'postcss-apply': {},
      'postcss-reporter': {}
    }
  };