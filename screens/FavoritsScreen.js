import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import BoldText from "../components/BoldText";
import MealsList from "../components/MealsList";
import {useDispatch, useSelector} from 'react-redux'

const FavoritsScreen = ({ navigation }) => {
    const {favoriteMeals,meals} = useSelector(state => ({...state.MealsSlice}))

    const navigationHandler = (params) => {
        navigation.navigate('mealDetailsScreen' ,params)
    }
    const favorits = meals.filter(item => favoriteMeals.indexOf(item.id) >=0)

    return <MealsList data={favorits} navigationHandler={navigationHandler} />;
};

export default FavoritsScreen;
