module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "DevFinder";
      return args;
    });

    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/_variables.scss"; @import "@/styles/_mixins.scss";`,
      },
    },
  },
};
