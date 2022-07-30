import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritsScreen, MealDetailsScreen } from "../screens";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const FavoritsStackNavigator = () => {
    const { colors } = useTheme();
    return (
        <Stack.Navigator
            initialRouteName="favoritsScreen"
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
                name="favoritsScreen"
                component={FavoritsScreen}
                options={({navigation}) => ({
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
                    return {
                        title: route.params.title,
                        headerRight: () => {
                            return (
                                <TouchableOpacity style={[tw`p-2 px-4`]}>
                                    <AntDesign
                                        name="star"
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
