const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "vehicles",

  exposes: {
    "./Module": "./src/app/home/home.module.ts",
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
