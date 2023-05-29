module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		semi: [2, 'always'],
		quotes: ['error', 'single'],
		'no-empty': 'error'
	}
};
