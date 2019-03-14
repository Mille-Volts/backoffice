const nodeExternals = require("webpack-node-externals");

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // in order to ignore all modules in node_modules folder (Element)
      if (!config.externals) config.externals = [];
      if (!Array.isArray(config.externals))
        config.externals = [config.externals];
      config.externals.push(
        nodeExternals({
          whitelist: ["vue-scrollto", "vue-sticky-directive", "vue-router"]
        })
      );
    } else {
      // mutate for development...
    }
  }
};
