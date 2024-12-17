import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Assurez-vous que le chemin est correct

export const store = configureStore({
    reducer: {
        user: userReducer, // Utilisation du userReducer importé
    },
});
