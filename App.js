import "react-native-gesture-handler";
import { useCallback, useEffect, useState } from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { enableScreens } from "react-native-screens";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme } from "@react-navigation/native";
import DrawerNavigator from "./navigators/DrawerNavigator";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {useSelector} from 'react-redux'

const CustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        one: "#69140E",
        two: "#F55536",
        three: "#FF773D",
        four: "#FFB238",
        five: "#CEE7E6",
        background2 : "#FFFFFF"
    },
};

const CustomDarkTheme = {
    ...DarkTheme,
    colors : {
        ...DarkTheme.colors,
        one : "rgb(1,1,1)",
        three: "#DDDDDD",
        background2 : "#24231f"

    }
}

enableScreens(); // increase the performance in larger apps

const addFonts = () => {
    return Font.loadAsync({
        "serif-regular": require("./assets/Fonts/NotoSerif-Regular.ttf"),
        "serif-bold": require("./assets/Fonts/NotoSerif-Bold.ttf"),
    });
};

SplashScreen.preventAutoHideAsync();

function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    const isDarkMode = useSelector((state) => state.MealsSlice.isDarkMode);

    useEffect(() => {
        async function prepare() {
            try {
                await addFonts();
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }


    return (
        <NavigationContainer onReady={onLayoutRootView} theme={isDarkMode ? CustomDarkTheme :CustomTheme}>
            {/* <BottomTabNavigator /> */}
            <DrawerNavigator />
            <StatusBar style="light" />
        </NavigationContainer>
    );
}

export default function reduxWrapper() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
