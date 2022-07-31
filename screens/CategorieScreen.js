import {
    View,
    Text,
    Button,
    FlatList,
    TouchableOpacity,
    Switch,
    useWindowDimensions,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import BoldText from "../components/BoldText";
import { CATEGORIES } from "../data/DummyData";
import GridItem from "../components/GridItem";

const CategorieScreen = ({ navigation }) => {
    const windowDimensions = useWindowDimensions();
    let ShuffledCategories = CATEGORIES.sort(() => {
        return Math.random() < Math.random();
    });

    return (
        <View>
            {/* <Switch value={true} onValueChange={(value) => !value}  /> */}
            <FlatList
                data={CATEGORIES}
                numColumns={windowDimensions.width <= 360 ? 2 : 3}
                key={windowDimensions.width <= 360 ? 1 : 2}
                renderItem={({ item }) => (
                    <GridItem
                        style={{ flex: windowDimensions.width <= 360 ? 1 / 2 : 1 / 3 }}
                        item={item}
                        navigation={navigation}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default CategorieScreen;
