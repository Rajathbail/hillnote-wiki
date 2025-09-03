export default {
  entry: ['src/index.js'],
  format: ['cjs', 'esm'],
  dts: false, // No TypeScript declarations needed
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'next'],
  loader: {
    '.css': 'css'
  }
}