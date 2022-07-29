import { MEALS } from "../data/DummyData";
import MealsList from "../components/MealsList";

const CategoryMealsScreen = ({ navigation, route }) => {
    const { catId } = route.params;

    const displayedMeals = MEALS.filter(
        (item) => item.categoryIds.indexOf(catId) >= 0
    );

    const navigationHandler = (params) => {
        navigation.navigate('MealDetails' ,params)
    }
    

    return (
        <MealsList data={displayedMeals} navigationHandler={navigationHandler}/>
    );
};

export default CategoryMealsScreen;
