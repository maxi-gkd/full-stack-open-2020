module.exports = {
    'extends': ['plugin:react/recommended'],
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true,
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
    },
    "rules": {
        "jsx-a11y/href-no-hash": ["off"],
        "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
        "no-console": 0,
        "no-alert": 0,
        "max-len": [
            "warn",
            {
                "code": 80,
                "tabWidth": 2,
                "comments": 80,
                "ignoreComments": false,
                "ignoreTrailingComments": true,
                "ignoreUrls": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ]
    }
}