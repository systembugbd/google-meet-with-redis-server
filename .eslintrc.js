module.exports = {

  env: {

    browser: true,

    commonjs: true,

    es2021: true,

  },

  extends: [

    'airbnb-base',

  ],

  parserOptions: {

    ecmaVersion: 12,

  },

  rules: {

    // windows linebreaks when not in production environment

    'linebreak-style': 0,

  },

};
