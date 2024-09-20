module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'module:metro-react-native-babel-preset', // Make sure to use this preset
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript'
    ],
    env: {
      test: {
        plugins: [
          ['@babel/plugin-transform-class-properties', { loose: true }],
          ['@babel/plugin-transform-private-methods', { loose: true }],
          ['@babel/plugin-transform-private-property-in-object', { loose: true }]
        ]
      }
    }
  };
};
