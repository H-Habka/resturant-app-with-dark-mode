import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import { FiltersScreen } from "../screens";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="CategoriesNavigator" screenOptions={{
            headerShown : false 
        }}>
            <Drawer.Screen name="CategoriesNavigator" component={BottomTabNavigator} />
            <Drawer.Screen name="Filters" component={FiltersScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
