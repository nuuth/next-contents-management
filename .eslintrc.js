module.exports = {
  /** "next", "next/core-web-vitals" はプロジェクト生成時に自動設定されたもの */
  extends: ["next", "next/core-web-vitals", "prettier"],
  /** 静的検証の前提条件 */
  env: { 
    /** ブラウザで動作するコードを検証 */
    browser: true 
  },
  parserOptions: {
    ecmaVersion: 2015
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    "import/order": [
      "error", {
        /** groupの並び */
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        /** group内をアルファベット順にソート */
        alphabetize: {
          order: "asc"
        },
        /** group間は1行空ける */
        "newlines-between": "always",
      }
    ]
  }
}
