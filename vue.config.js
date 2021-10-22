module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "DevFinder";
      return args;
    });
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/_variables.scss"; @import "@/styles/_mixins.scss";`,
      },
    },
  },
};
