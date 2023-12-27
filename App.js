import { useFonts } from "expo-font";
import RootNavigation from "./navigations/RootNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    ExtraLight: require("./assets/fonts/Inter-ExtraLight.ttf"),
    Light: require("./assets/fonts/Inter-Light.ttf"),
    Regular: require("./assets/fonts/Inter-Regular.ttf"),
    Medium: require("./assets/fonts/Inter-Medium.ttf"),
    SemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    Bold: require("./assets/fonts/Inter-Bold.ttf"),
    ExtraBold: require("./assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <RootNavigation />;
}
