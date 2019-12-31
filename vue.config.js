const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')
const pxtorem = require('postcss-pxtorem')
module.exports = {
  lintOnSave: false,
  outputDir: '../docs',
  publicPath: process.env.NODE_ENV === 'production' ? '' : '',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'font-size-sm': '13px',
          'font-size-md': '15px',
          'font-size-lg': '17px',
          'goods-action-button-danger-color': '#7232dd',
          'goods-action-button-warning-color': '#3eaf7c'
        }
      }
      // postcss: {
      //   plugins: [
      //     autoprefixer(),
      //     pxtorem({
      //       rootValue: 37.5,
      //       propList: ['*']
      //     }),
      //     pxtoviewport({
      //       viewportWidth: 375
      //     })
      //   ]
      // }
    }
  }
}
