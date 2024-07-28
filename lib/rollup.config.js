import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

const rollupConfig = {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.js',
			format: 'cjs',
		},
		{
			file: 'dist/index.esm.js',
			format: 'esm',
		},
	],
	plugins: [
		resolve(),
		commonjs(),
		typescript({ tsconfig: './tsconfig.json' }),
		postcss({
			modules: true,
			extract: 'dist/styles.css',
		}),
		babel({
			babelHelpers: 'bundled',
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			presets: [
				'@babel/preset-react',
				'@babel/preset-typescript',
				'@babel/preset-env',
			],
		}),
	],
	external: ['react', 'react-dom'],
};

export default rollupConfig;
