const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Ajouter le support des extensions nécessaires
config.resolver.sourceExts = ["jsx", "js", "ts", "tsx", "json"];

module.exports = config;
