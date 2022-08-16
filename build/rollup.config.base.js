import path from 'path';

const {
  dependencies,
  peerDependencies,
  version,
} = require(path.resolve(process.cwd(), 'package.json'));

const banner =
  '/*!\n' +
  ` * Vue-intercom v${version}\n` +
  ` * (c) 2022-${new Date().getFullYear()} Gigalogy\n` +
  ' */';

export default {
  input: 'src/index.js',
  output: {
    name: 'VueIntercom',
    exports: 'named',
    globals: {
      vue: 'Vue',
    },
    banner,
  },
  watch: { include: 'src/**' },
  external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
};
