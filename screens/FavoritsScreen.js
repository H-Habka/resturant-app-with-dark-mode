import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import BoldText from "../components/BoldText";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/DummyData";

const FavoritsScreen = ({ navigation }) => {
    const displayedMeals = MEALS.filter(
        (item) =>
            item.id === "m1" ||
            item.id === "m2" ||
            item.id === "m4" ||
            item.id === "m5" ||
            item.id === "m3"
    );

    const navigationHandler = (params) => {
        navigation.navigate('mealDetailsScreen' ,params)
    }
    return <MealsList data={displayedMeals} navigationHandler={navigationHandler} />;
};

export default FavoritsScreen;
