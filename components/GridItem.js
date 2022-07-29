import { TouchableOpacity, View } from "react-native";
import BoldText from "./BoldText";
import tw from "tailwind-react-native-classnames";
import {useTheme} from '@react-navigation/native'


const GridItem = ({item,navigation }) => {
    const {colors} = useTheme()
    return (
        <TouchableOpacity
            style={[tw`flex-1 m-2`]}
            onPress={() => {
                navigation.navigate("CategoryMeals", {
                    catId: item.id,
                    title : item.title
                });
            }}
        >
            <View style={[tw`h-40 justify-end items-end p-2 rounded-2xl`,{backgroundColor : item.color}]}>
                <BoldText style={[tw`text-xl`]}>{item.title}</BoldText>
            </View>
        </TouchableOpacity>
    );
};

export default GridItem;
