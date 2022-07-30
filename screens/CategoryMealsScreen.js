import { useSelector } from "react-redux";
import MealsList from "../components/MealsList";

const CategoryMealsScreen = ({ navigation, route }) => {
    const { catId } = route.params;
    const { filters, meals } = useSelector((state) => ({
        ...state.MealsSlice,
    }));
    const { isGlutenFree, isVegan, isVegettarian, isLactoseFree } = filters;

    let displayedMeals = meals.filter(
        (item) => item.categoryIds.indexOf(catId) >= 0
    );

    if (isGlutenFree || isVegan || isVegettarian || isLactoseFree)
        displayedMeals = displayedMeals.filter((item) => {
            if (
                (item.isGlutenFree === true && isGlutenFree) ||
                (item.isVegan === true && isVegan) ||
                (item.isVegettarian === true && isVegettarian) ||
                (item.isLactoseFree === true && isLactoseFree)
            )
                return true;
        });

    const navigationHandler = (params) => {
        navigation.navigate("MealDetails", params);
    };

    return (
        <MealsList
            data={displayedMeals}
            navigationHandler={navigationHandler}
        />
    );
};

export default CategoryMealsScreen;
