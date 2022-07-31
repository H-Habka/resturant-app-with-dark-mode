import "react-native-gesture-handler";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    DrawerContent,
} from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import { FiltersScreen } from "../screens";
import BottomTabNavigator from "./BottomTabNavigator";
import { useTheme } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { Text, useWindowDimensions, Switch, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/Features/MealsSlice";
import BoldText from "../components/BoldText";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    const dispatch = useDispatch();
    const { colors } = useTheme();
    const isDarkMode = useSelector((state) => state.MealsSlice.isDarkMode);
    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={[
                tw`mt-20 h-full p-0`,
                { backgroundColor: colors.background2 },
            ]}
        >
            <DrawerItemList {...props} />
            {/* <DrawerContent /> */}
            <View style={[tw`px-5 pt-2 flex-row items-center justify-between`]}>
                <BoldText style={[tw`text-lg`, { color: colors.text }]}>
                    Dark Mode
                </BoldText>
                <Switch
                    value={isDarkMode}
                    onValueChange={() => dispatch(toggleDarkMode())}
                    thumbColor={"gray"}
                    trackColor={{ true: "white", false: "black" }}
                />
            </View>
        </DrawerContentScrollView>
    );
};

const DrawerNavigator = (props) => {
    const { colors, dark } = useTheme();
    const screenDimensions = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            initialRouteName="CategoriesNavigator"
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: colors.primary,
                drawerActiveBackgroundColor: "",
                drawerInactiveTintColor: colors.text,
                // drawerActiveBackgroundColor : colors.background,
                // drawerContentContainerStyle: [tw`h-full bg-gray-400`],
                // drawerInactiveBackgroundColor: "",
                drawerLabelStyle: [tw`text-lg `, { fontFamily: "serif-bold" }],
                drawerStyle: [
                    tw`${screenDimensions.width <= 360 ? "w-8/12" : "w-4/12"}`,
                    {
                        backgroundColor: dark ? colors.background2 : colors.one,
                    },
                ],
                drawerType: "slide",

                // drawerHideStatusBarOnOpen : true
            }}
        >
            <Drawer.Screen
                name="CategoriesNavigator"
                component={BottomTabNavigator}
                options={{
                    drawerContentStyle: "text-2xl",
                    title: "Categories",
                }}
            />
            <Drawer.Screen name="Filters" component={FiltersScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
