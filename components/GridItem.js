import { TouchableOpacity, View, Image } from "react-native";
import BoldText from "./BoldText";
import tw from "tailwind-react-native-classnames";
import { useTheme } from "@react-navigation/native";

const GridItem = ({ item, navigation }) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            style={[tw`flex-1 m-2`]}
            onPress={() => {
                navigation.navigate("CategoryMeals", {
                    catId: item.id,
                    title: item.title,
                });
            }}
        >
            
            <View style={[tw`relative w-full`]}>
                <Image source={{uri : item.image}} style={[tw`w-full h-44`]} />
                <View
                    style={[
                        tw`p-2 absolute top-0 w-full `,
                        { backgroundColor: 'rgba(10,10,10,0.6)' },
                    ]}
                >
                    <BoldText style={[tw`text-xl text-white text-center`]}>{item.title}</BoldText>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default GridItem;
