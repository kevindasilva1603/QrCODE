module.exports = {
    preset: "react-native",
    transformIgnorePatterns: [
        "node_modules/(?!react-redux|@react-native|react-native|@react-navigation)", // Ajoute ici les modules que tu veux transformer
    ],
    transform: {
        "^.+\\.js$": "babel-jest", // Transformer les fichiers JS avec babel-jest
    },
};
