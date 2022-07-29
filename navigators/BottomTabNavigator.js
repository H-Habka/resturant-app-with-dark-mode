import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import { FavoritsScreen } from "../screens";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import FavoritsStackNavigator from "./FavoritsStackNavigator";

const BottomNavigator = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const { colors } = useTheme();
    return (
        <BottomNavigator.Navigator
            initialRouteName="all"
            screenOptions={{
                headerShown: false,
                
                tabBarActiveBackgroundColor: colors.five,
            }}
        >
            <BottomNavigator.Screen
                name="Meals"
                component={StackNavigator}
                options={{
                    tabBarIcon: (tabinfo) => (
                        <Ionicons name="ios-restaurant" size={24} color={tabinfo.color} />
                    ),
                    tabBarActiveTintColor: colors.one,
                }}
            />
            <BottomNavigator.Screen
                name="Favorits"
                component={FavoritsStackNavigator}
                options={{
                    tabBarIcon: (tabinfo) => (
                        <AntDesign name="star" size={24} color={tabinfo.color}/>
                    ),
                    tabBarActiveTintColor: colors.four,
                }}
            />
        </BottomNavigator.Navigator>
    );
};

export default BottomTabNavigator;
