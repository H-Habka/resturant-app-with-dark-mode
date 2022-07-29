import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useTheme } from "@react-navigation/native";
import RegularText from "./RegularText";

const MealItem = ({ item, navigationHandler }) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            onPress={() => navigationHandler({
                mealId: item.id,
                title: item.title,
            })}

            style={[tw`flex-1 mx-2 rounded-xl overflow-hidden my-2`]}
        >
            <View style={[tw`relative`]}>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={[tw`w-full h-48`]}
                />
                <View
                    style={[
                        tw`absolute bottom-0 w-full p-2`,
                        { backgroundColor: "rgba(0,0,0,0.6)" },
                    ]}
                >
                    <RegularText
                        style={[
                            tw`text-center`,
                            { fontSize: 17, color: colors.five },
                        ]}
                    >
                        {item.title}
                    </RegularText>
                </View>
            </View>

            <View
                style={[
                    tw`flex-row justify-between p-2`,
                    { backgroundColor: colors.five },
                ]}
            >
                <RegularText>{item.duration} m</RegularText>
                <RegularText>{item.complexity}</RegularText>
                <RegularText>{item.affordability}</RegularText>
            </View>
        </TouchableOpacity>
    );
};

export default MealItem;
