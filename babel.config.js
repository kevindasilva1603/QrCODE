module.exports = {
    presets: ["babel-preset-expo"],
    plugins: [
        "@babel/plugin-transform-flow-strip-types",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-private-methods",
        "@babel/plugin-transform-private-property-in-object",
    ],
};
