import { View, TouchableOpacity, Switch } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import BoldText from "../components/BoldText";
import RegularText from "../components/RegularText";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/Features/MealsSlice";

const Stack = createNativeStackNavigator();

const FilterItem = ({ value, setValue, title }) => {
    const { colors, dark } = useTheme();

    return (
        <View style={[tw`flex-row items-center w-full justify-between p-1`]}>
            <RegularText style={[tw`text-xl`, {color : colors.text}]}>{title}</RegularText>
            <Switch
                thumbColor={colors.two}
                trackColor={{ true: colors.two, false :dark ? colors.background2 : null  }}
                onValueChange={(switchState) =>
                    setValue({ filter: `is${title}`, value: switchState })
                }
                value={value}
            />
        </View>
    );
};

const FilterPage = () => {
    const dispatch = useDispatch();
    const { isGlutenFree, isVegan, isVegettarian, isLactoseFree } = useSelector(
        (state) => ({ ...state.MealsSlice.filters })
    );

    const setFiltersArray = (filterItem) => {
        const { filter, value } = filterItem;
        dispatch(setFilters({ filter, value }));
    };
    return (
        <View>
            <BoldText style={[tw`text-2xl text-center mt-2`]}>
                Filters Available
            </BoldText>
            <View style={[tw`w-9/12 mx-auto mt-6`]}>
                <FilterItem
                    value={isGlutenFree}
                    setValue={setFiltersArray}
                    title="GlutenFree"
                />
                <FilterItem
                    value={isVegan}
                    setValue={setFiltersArray}
                    title="Vegan"
                />
                <FilterItem
                    value={isVegettarian}
                    setValue={setFiltersArray}
                    title="Vegettarian"
                />
                <FilterItem
                    value={isLactoseFree}
                    setValue={setFiltersArray}
                    title="LactoseFree"
                />
            </View>
        </View>
    );
};

const FiltersScreen = () => {
    const { colors , dark} = useTheme();
    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: dark ? colors.background2 :colors.one,
                },
                headerTintColor: colors.four,
                headerTitleStyle: { fontFamily: "serif-bold", fontSize: 24 },
                presentation: "card",
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
                headerRight: () => {
                    return (
                        <TouchableOpacity
                            style={[tw`py-2 px-4`]}
                            onPress={() => {
                                navigation.navigate("Categories");
                            }}
                        >
                            <Entypo name="check" size={28} color={"green"} />
                        </TouchableOpacity>
                    );
                },
            })}
        >
            <Stack.Screen name="filtersScreen" component={FilterPage} />
        </Stack.Navigator>
    );
};

export default FiltersScreen;
