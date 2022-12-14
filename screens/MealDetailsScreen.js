import { View, Image, FlatList, useWindowDimensions } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useTheme } from "@react-navigation/native";
import { MEALS } from "../data/DummyData";
import RegularText from "../components/RegularText";
import BoldText from "../components/BoldText";
import { useSelector } from "react-redux";

const MealDetailsScreen = ({ route }) => {
    const { mealId } = route.params;
    const { colors,dark } = useTheme();
    const { meals } = useSelector((state) => ({
        ...state.MealsSlice,
    }));
    const windowDimensions = useWindowDimensions();
    const item = meals.filter((item) => item.id === mealId)[0];

    const HeaderItem = () => (
        <View>
            <View style={[tw``]}>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={[tw`w-full h-64`]}
                />
            </View>
            <View
                style={[
                    tw`flex-row justify-between p-2`,
                    { backgroundColor: dark ? colors.background2 : colors.five },
                ]}
            >
                <RegularText style={{color : colors.text}}>{item.duration} m</RegularText>
                <RegularText style={{color : colors.text}}>{item.complexity}</RegularText>
                <RegularText style={{color : colors.text}}>{item.affordability}</RegularText>
            </View>
            <View style={[tw``]}>
                <BoldText style={[tw`text-xl mt-2 px-2`, {color : colors.text}]}>
                    {item.title}
                </BoldText>
            </View>
        </View>
    );

    const FlatListComponent = ({ data, title }) => (
        <View>
            <BoldText style={[tw`text-center text-lg mt-4`,{color: colors.text}]}>{title}</BoldText>
            <FlatList
                nestedScrollEnabled
                // style={[tw`h-48`]}
                StickyHeaderComponent={true}
                keyExtractor={(item, idx) => idx}
                data={data}
                renderItem={({ item }) => (
                    <View style={[tw`border m-2`, {borderColor : colors.border}]}>
                        <RegularText style={[tw`p-1 text-lg`,{color : colors.text}]}>
                            {item}
                        </RegularText>
                    </View>
                )}
            />
        </View>
    );

    const layoutArraySmall = [
        <View style={"h-20"}>
            <HeaderItem />
        </View>,
        <FlatListComponent data={item.ingrediants} title="Ingrediants" />,
        <FlatListComponent data={item.steps} title="Steps" />,
    ];

    const layoutArrayBig = [
        <FlatListComponent data={item.ingrediants} title="Ingrediants" />,
        <FlatListComponent data={item.steps} title="Steps" />,
    ];


    if (windowDimensions.width <= 360) {
        return (
            <View style={[tw``]}>
                <FlatList
                    keyExtractor={(item, idx) => idx}
                    data={layoutArraySmall}
                    renderItem={({ item }) => item}
                />
            </View>
        );
    } else {
        return (
            <View style={[tw`flex-row flex-1`]}>
                <View style={[tw`flex-1 relative`]}>
                    <Image
                        source={{ uri: item.imageUrl }}
                        style={[tw`w-full h-full`]}
                    />
                    <View
                        style={[
                            tw`flex-row justify-between p-1 opacity-70 absolute w-full`,
                            { backgroundColor: dark ? colors.background2 : colors.five },
                        ]}
                    >
                        <BoldText style={{color : colors.text}}>{item.duration} m</BoldText>
                        <BoldText style={{color : colors.text}}>{item.complexity}</BoldText>
                        <BoldText style={{color : colors.text}}>{item.affordability}</BoldText>
                    </View>
                </View>
                <FlatList
                    ListHeaderComponent={() => (
                        <View style={[tw`flex-1`]}>
                            <View style={[tw``]}>
                                <BoldText style={[tw`text-xl mt-2 px-2`]}>
                                    {item.title}
                                </BoldText>
                            </View>
                        </View>
                    )}
                    style={[tw`flex-1`]}
                    keyExtractor={(item, idx) => idx}
                    data={layoutArrayBig}
                    renderItem={({ item }) => item}
                />
            </View>
        );
    }
};

export default MealDetailsScreen;
