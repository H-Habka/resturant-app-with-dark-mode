import { View, Text, Button, FlatList, TouchableOpacity, Switch } from "react-native";
import tw from "tailwind-react-native-classnames";
import BoldText from "../components/BoldText";
import { CATEGORIES } from "../data/DummyData";
import GridItem from "../components/GridItem";


const CategorieScreen = ({ navigation }) => {
    
    return (
        <View>
            {/* <Switch value={true} onValueChange={(value) => !value}  /> */}
            <FlatList
                data={CATEGORIES}
                numColumns={2}
                renderItem={({item}) => <GridItem item={item} navigation={navigation}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default CategorieScreen;
