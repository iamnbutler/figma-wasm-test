const esbuild = require('esbuild');

console.log('test')

esbuild.build({
    entryPoints: ['src/code.ts'],
    bundle: true,
    outfile: 'dist/code.js',
    minify: true,
    platform: 'browser',
    target: 'es2017',
    loader: {
        '.ts': 'ts',
        '.wasm': 'webassembly',
    },
}).catch(() => process.exit(1));
