import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritsScreen, MealDetailsScreen } from "../screens";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleIsFavorite } from "../redux/Features/MealsSlice";

const Stack = createNativeStackNavigator();

const FavoritsStackNavigator = () => {
    const { colors, dark } = useTheme();
    const favoriteMeals = useSelector(
        (state) => state.MealsSlice.favoriteMeals
    );
    const dispatch = useDispatch();
    return (
        <Stack.Navigator
            initialRouteName="favoritsScreen"
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: dark ? colors.background2 :colors.one,
                },
                headerTintColor: colors.four,
                headerTitleStyle: { fontFamily: "serif-bold", fontSize: 24 },
                presentation: "card",
            })}
        >
            <Stack.Screen
                name="favoritsScreen"
                component={FavoritsScreen}
                options={({ navigation }) => ({
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
                name="mealDetailsScreen"
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

export default FavoritsStackNavigator;
