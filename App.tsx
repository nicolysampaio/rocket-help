import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";

import { THEME } from "./src/styles/theme";

import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
import { Register } from './src/screens/Register';
import { Details } from './src/screens/Details';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Details/> : <Loading/> }
    </NativeBaseProvider>
  );
}
