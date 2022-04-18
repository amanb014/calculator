import React from "react";
import { NativeBaseProvider } from "native-base";
import { AppRouting } from "./components/routing";
import { RealmContext } from "./components/contexts/storage/storage.context";
import { nativeBaseConfig } from "./native-base.config";

export default function App() {
  return (
    <NativeBaseProvider config={nativeBaseConfig}>
      <RealmContext.RealmProvider>
        <AppRouting />
      </RealmContext.RealmProvider>
    </NativeBaseProvider>
  );
}
