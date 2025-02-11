const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    vehicles: "http://localhost:3000/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    "arroz-lib": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
  },
});
