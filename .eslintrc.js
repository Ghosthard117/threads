module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'standard-with-typescript',
        'plugin:react/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'react/react-in-jsx-scope': 0,
        'react/jsx-uses-react': 0,
        '@typescript-eslint/explicit-function-return-type': 'off',
        'space-before-function-paren': 0
    }
}
