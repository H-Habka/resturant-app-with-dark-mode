import { View, Text, TouchableOpacity, Switch } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import BoldText from "../components/BoldText";
import RegularText from "../components/RegularText";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import { color } from "react-native-reanimated";
import {useDispatch} from 'react-redux'

const Stack = createNativeStackNavigator();

const FilterItem = ({ value, setValue, title }) => {
    const { colors } = useTheme();
    return (
        <View style={[tw`flex-row items-center w-full justify-between p-1`]}>
            <RegularText style={[tw`text-xl`]}>{title}</RegularText>
            <Switch
                thumbColor={colors.two}
                trackColor={{ true: colors.two }}
                onValueChange={(state) => setValue(state)}
                value={value}
            />
        </View>
    );
};

const FilterPage = () => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegettarian, setIsVegettarian] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    return (
        <View>
            <BoldText style={[tw`text-2xl text-center mt-2`]}>
                Filters Available
            </BoldText>
            <View style={[tw`w-9/12 mx-auto mt-6`]}>
                <FilterItem
                    value={isGlutenFree}
                    setValue={setIsGlutenFree}
                    title="GlutenFree"
                />
                <FilterItem
                    value={isVegan}
                    setValue={setIsVegan}
                    title="Vegan"
                />
                <FilterItem
                    value={isVegettarian}
                    setValue={setIsVegettarian}
                    title="Vegettarian"
                />
                <FilterItem
                    value={isLactoseFree}
                    setValue={setIsLactoseFree}
                    title="LactoseFree"
                />
            </View>
        </View>
    );
};

const FiltersScreen = () => {
    const { colors } = useTheme();
    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: colors.one,
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
                            onPress={() => navigation.navigate("Categories")}
                        >
                            <Entypo name="check" size={28} color={'green'} />
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
