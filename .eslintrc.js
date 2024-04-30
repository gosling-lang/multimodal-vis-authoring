module.exports = exports = {
	parser: "@typescript-eslint/parser",
	"extends": [
	    "eslint:recommended",
		  "plugin:react/recommended",
	],
	"plugins": [
		"react",
    "@typescript-eslint"
	],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
	"rules": {
		"indent": ["error", "tab"],
		"quote-props": ["error", "as-needed"],
		"quotes": [2, "single", "avoid-escape"],
    "react/no-unescaped-entities": 0 // allow
	}
}