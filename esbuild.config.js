const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/code.ts'],
    bundle: true,
    outfile: 'dist/code.js',
    minify: true,
    platform: 'browser',
    target: 'es2017',
    loader: {
        '.ts': 'ts',
    },
}).catch(() => process.exit(1));
