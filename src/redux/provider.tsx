"use client";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
