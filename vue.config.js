module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        //prependData (vue2), data (vue3)
        prependData: `
            @import "@/assets/scss/main.scss";
            `
      }
    }
  },
  publicPath: ''
}
