// module.exports = {
//   plugins: {
//     'postcss-import' : {},
//     'postcss-cssnext': {
//       browsers: [
//         'last 2 versions',
//         '> 5%'
//       ]
//     }
//   }
// }

const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
  ],
};