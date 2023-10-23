import { PaperProvider } from "react-native-paper";
import StackNavigator from "./src/navigation/StackNavigator";
import { LogBox, StatusBar } from "react-native";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { api } from "./src/redux/api";

LogBox.ignoreLogs(["new NativeEventEmitter"]);

export default function App() {
  return (
    <ApiProvider api={api}>
      <PaperProvider>
        <StackNavigator />
      </PaperProvider>

      <StatusBar barStyle="dark-content" backgroundColor="#ffffff"/>
    </ApiProvider>
  );
}
