import { ThemeProvider } from "@shopify/restyle";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@/store";
import theme from "@/theme";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Slot />
          <StatusBar hidden />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
