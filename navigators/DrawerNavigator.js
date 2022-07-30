import "react-native-gesture-handler";
import { createDrawerNavigator ,DrawerContentScrollView ,DrawerItemList} from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import { FiltersScreen } from "../screens";
import BottomTabNavigator from "./BottomTabNavigator";
import {useTheme} from '@react-navigation/native'
import tw from "tailwind-react-native-classnames";

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    const {colors} = useTheme()
    return (
        <Drawer.Navigator initialRouteName="CategoriesNavigator" screenOptions={{
            headerShown : false,
            drawerActiveTintColor : colors.one,
            drawerActiveBackgroundColor : "",
            drawerInactiveTintColor : 'black',
            drawerContentContainerStyle : [tw`h-full bg-gray-400`],
            drawerInactiveBackgroundColor : '',
            drawerLabelStyle : [tw`text-lg `, {fontFamily : 'serif-bold'}],
            drawerStyle : [tw`w-8/12`],
            drawerType : "front",
            
            // drawerHideStatusBarOnOpen : true
            
        }}>
            <Drawer.Screen name="CategoriesNavigator" component={BottomTabNavigator} options={{
                drawerContentStyle : 'text-2xl',
                title : "Categories",
            }} />
            <Drawer.Screen name="Filters" component={FiltersScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
