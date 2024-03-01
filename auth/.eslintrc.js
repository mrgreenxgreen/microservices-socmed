// module.exports = {
//     extends: "airbnb-base",
//     env:{
//         "es6":true,
//         "browser":true
//     },
//     rules:{
//         "brace-style":["error", "stroustrup"],
//         "comma-dangle":["error","never"],
//         "no-unused-vars":["warn"]
//     }

// }
// .eslintrc.js example
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "brace-style":["error", "stroustrup"],
        //         "comma-dangle":["error","never"],
        //         "no-unused-vars":["warn"]
    },
  }