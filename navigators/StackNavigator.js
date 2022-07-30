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
import { FontAwesome5 } from "@expo/vector-icons";
import {
    addToFavorites,
    removeFromFavorits,
    toggleIsFavorite
} from "../redux/Features/MealsSlice";
import { useDispatch, useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { colors } = useTheme();
    const dispatch = useDispatch();
    const favoriteMeals = useSelector(
        (state) => state.MealsSlice.favoriteMeals
    );

    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: colors.one,
                },
                headerTintColor: colors.four,
                headerTitleStyle: { fontFamily: "serif-bold", fontSize: 24 },
                presentation: "card",
            })}
        >
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={({ navigation }) => ({
                    title: "Meal Categorys",
                    headerLeft: () => {
                        return (
                            <TouchableOpacity
                                style={[tw`p-2 px-4`]}
                                onPress={() => navigation.openDrawer()}
                            >
                                <FontAwesome5
                                    name="hamburger"
                                    size={24}
                                    color={colors.three}
                                />
                            </TouchableOpacity>
                        );
                    },
                })}
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
                    let isFavorite = false;
                    if (favoriteMeals.indexOf(route.params.mealId) >= 0) {
                        isFavorite = true;
                    }
                    return {
                        title: route.params.title,
                        headerRight: () => {
                            return (
                                <TouchableOpacity
                                    style={[tw`p-2 px-4`]}
                                    onPress={() =>
                                        dispatch(
                                            toggleIsFavorite(
                                                route.params.mealId
                                            )
                                        )
                                    }
                                >
                                    <AntDesign
                                        name={isFavorite ? "star" : "staro"}
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
