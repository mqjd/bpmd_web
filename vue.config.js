module.exports = {
  devServer: {
    open: true,
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/theme.scss";@import "~@/mixin.scss";`
      }
    }
  }
}
