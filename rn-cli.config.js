// const blacklist = require('metro/src/blacklist');

// module.exports = {
//   getTransformModulePath() {
//     return require.resolve('react-native-typescript-transformer');
//   },
//   getSourceExts() {
//     return ['ts', 'tsx'];
//   },
//   getBlacklistRE() {
//     return blacklist([/react-native\/local-cli\/core\/__fixtures__.*/]);
//   }
// };

// try {
//   // >= 0.57
//   blacklist = require('metro-config/src/defaults/blacklist');
// } catch (e) {
//   // <= 0.56
//   blacklist = require('metro/src/blacklist');
// }

// const blacklist = require('metro-config/src/defaults/blacklist');

// module.exports = {
//   watchFolders: alternateRoots,
//   resolver: {
//     blacklistRE: blacklist
//   },
//   transformer: {
//     babelTransformerPath: require.resolve('./scripts/transformer.js')
//   }
// };

module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx', 'js', 'jsx'];
  }
};
