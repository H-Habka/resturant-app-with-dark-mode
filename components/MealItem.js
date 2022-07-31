import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useTheme } from "@react-navigation/native";
import RegularText from "./RegularText";

const MealItem = ({ item, navigationHandler, style }) => {
    const { colors,dark } = useTheme();
    return (
        <TouchableOpacity
            onPress={() => navigationHandler({
                mealId: item.id,
                title: item.title,
            })}

            style={[tw`rounded-xl overflow-hidden m-2`,{...style}]}
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
                            { fontSize: 17, color: 'white' },
                        ]}
                    >
                        {item.title}
                    </RegularText>
                </View>
            </View>

            <View
                style={[
                    tw`flex-row justify-between p-2`,
                    { backgroundColor: dark? colors.background2: colors.five },
                ]}
            >
                <RegularText style={{color : colors.text}}>{item.duration} m</RegularText>
                <RegularText style={{color : colors.text}}>{item.complexity}</RegularText>
                <RegularText style={{color : colors.text}}>{item.affordability}</RegularText>
            </View>
        </TouchableOpacity>
    );
};

export default MealItem;
