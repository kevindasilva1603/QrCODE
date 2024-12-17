import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleGenerateQR = () => {
        if (name && surname) {
            dispatch(setUser({ name, surname }));
            navigation.navigate("QRScreen");
        } else {
            Alert.alert("Erreur", "Veuillez remplir les deux champs.");
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Nom'
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder='Prénom'
                value={surname}
                onChangeText={setSurname}
            />
            <Button title='Générer le QR Code' onPress={handleGenerateQR} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        backgroundColor: "#0E0E2C",
    },
    input: {
        width: "80%",
        padding: 12,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        color: "white",
        backgroundColor: "#1C1C3C",
    },
});

export default HomeScreen;
