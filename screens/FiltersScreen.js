import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import BoldText from "../components/BoldText";

const Stack = createNativeStackNavigator();

const FilterPage = () => {
    return (
        <View>
            <BoldText>Filters page</BoldText>
        </View>
    );
};

const FiltersScreen = () => {
    const {colors} = useTheme()
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.one,
                },
                headerTintColor: colors.four,
                headerTitleStyle: { fontFamily: "serif-bold", fontSize: 24 },
                presentation: "card",
            }}
        >
            <Stack.Screen name="filtersScreen" component={FilterPage} />
        </Stack.Navigator>
    );
};

export default FiltersScreen;
