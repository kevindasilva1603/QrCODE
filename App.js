import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./src/store/store";
import HomeScreen from "./src/screens/HomeScreen";
import QRScreen from "./src/screens/QRScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name='QRScreen' component={QRScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
