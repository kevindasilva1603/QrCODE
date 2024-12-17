// src/screens/__tests__/HomeScreen.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../HomeScreen";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { NavigationContainer } from "@react-navigation/native";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
        navigate: mockNavigate,
    }),
}));

describe("HomeScreen", () => {
    const renderScreen = () =>
        render(
            <Provider store={store}>
                <NavigationContainer>
                    <HomeScreen />
                </NavigationContainer>
            </Provider>
        );

    test("1. Rendu du snapshot", () => {
        const screen = renderScreen();
        expect(screen).toMatchSnapshot();
    });

    test("2. Le composant HomeScreen existe", () => {
        const { getByPlaceholderText, getByText } = renderScreen();
        expect(getByPlaceholderText("Nom")).toBeTruthy();
        expect(getByPlaceholderText("Prénom")).toBeTruthy();
        expect(getByText("Générer le QR Code")).toBeTruthy();
    });

    test("3. Champs de saisie pour nom et prénom existent", () => {
        const { getByPlaceholderText } = renderScreen();
        const inputName = getByPlaceholderText("Nom");
        const inputSurname = getByPlaceholderText("Prénom");
        expect(inputName).toBeTruthy();
        expect(inputSurname).toBeTruthy();
    });

    test("4. Le bouton permettant de générer le QR Code existe", () => {
        const { getByText } = renderScreen();
        const button = getByText("Générer le QR Code");
        expect(button).toBeTruthy();
    });

    test("5. Navigation appelée une fois lors du clic sur le bouton", () => {
        const { getByText, getByPlaceholderText } = renderScreen();

        fireEvent.changeText(getByPlaceholderText("Nom"), "Jean");
        fireEvent.changeText(getByPlaceholderText("Prénom"), "Marc");
        fireEvent.press(getByText("Générer le QR Code"));

        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith("QRScreen");
    });
});
