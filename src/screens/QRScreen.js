// src/screens/QRScreen.js
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import QRCode from "react-native-qrcode-svg";

const QRScreen = () => {
    const { name, surname } = useSelector((state) => state.user);
    const qrValue = `${name} ${surname}`;

    return (
        <View style={styles.container}>
            <QRCode
                value={qrValue}
                size={200}
                color='white'
                backgroundColor='#1C1C3C'
            />
            <Text style={styles.text}>
                {name.toUpperCase()} {surname.toUpperCase()}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0E0E2C",
    },
    text: {
        color: "white",
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default QRScreen;
