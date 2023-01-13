module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-deprecated-slot-attribute": "off",
    "vue/no-deprecated-v-on-native-modifier": "off",
    "vue/no-deprecated-filter": "off",
    "vue/no-deprecated-v-bind-sync": "off",
    "no-tabs": "off",
    "indent": "off",
    // "import/no-cycle": ["error", { maxDepth: Infinity }],
    "import/no-cycle": 0,
    semi: ["error", "never"],
    "max-len": "off",
    "linebreak-style": "off",
    camelcase: [
      "error",
      { properties: "never", ignoreDestructuring: true, ignoreImports: true }
    ],
    "arrow-parens": ["error", "as-needed"],
    "vue/multiline-html-element-content-newline": "off",
    "multiline": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "quotes": ["off", "double"]
  }
}
