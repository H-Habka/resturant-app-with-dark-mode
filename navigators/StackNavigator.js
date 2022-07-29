import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import {
    CategoriesScreen,
    CategoryMealsScreen,
    FavoritsScreen,
    MealDetailsScreen,
} from "../screens";

import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { colors } = useTheme();

    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={({navigation}) => ({
                headerStyle: {
                    backgroundColor: colors.one,
                },
                headerTintColor: colors.four,
                headerTitleStyle: { fontFamily: "serif-bold", fontSize: 24 },
                presentation: "card",
                headerLeft: () => {
                    return (
                        <TouchableOpacity style={[tw`p-2 px-4`]} onPress={() => navigation.openDrawer()}>
                            <AntDesign
                                name="staro"
                                size={24}
                                color={"yellow"}
                            />
                        </TouchableOpacity>
                    );
                },
            })}
        >
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "Meal Categorys",
                }}
            />
            <Stack.Screen
                name="CategoryMeals"
                component={CategoryMealsScreen}
                options={({ route }) => {
                    return {
                        title: route.params.title,
                    };
                }}
            />
            <Stack.Screen name="Favorits" component={FavoritsScreen} />
            <Stack.Screen
                name="MealDetails"
                component={MealDetailsScreen}
                options={({ route }) => {
                    return {
                        title: route.params.title,
                        headerRight: () => {
                            return (
                                <TouchableOpacity style={[tw`p-2 px-4`]}>
                                    <AntDesign
                                        name="staro"
                                        size={24}
                                        color={"yellow"}
                                    />
                                </TouchableOpacity>
                            );
                        },
                    };
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
