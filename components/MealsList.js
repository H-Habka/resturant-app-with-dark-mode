import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, View, Text, useWindowDimensions } from "react-native";
import tw from "tailwind-react-native-classnames";
import MealItem from "./MealItem";

const MealsList = ({ data, navigationHandler }) => {
    const windowDimensions = useWindowDimensions()
    const [refresh, setRefresh] = useState(true);
    setTimeout(() => {
        setRefresh(false);
    }, 2000);

    
    return (
        <View style={[tw`p-2`]}>
            <FlatList
                // initialScrollIndex={2}
                // inverted={true}
                // onEndReached={() => console.log('test')}
                // onEndReachedThreshold={0.5}
                // ListHeaderComponent={() => (
                //     <View style={[tw`bg-red-200 py-10`]}>
                //         <Text>Test</Text>
                //     </View>
                // )}
                // stickyHeaderIndices={[0]}
                onRefresh={() => {
                    console.log("hello");
                }}
                refreshing={refresh}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                key={windowDimensions.width <= 360 ? 1 : 2}
                // columnWrapperStyle={
                //     windowDimensions.width <= 360
                //         ? null
                //         : [tw`bg-gray-400 rounded-2xl mb-2`]
                // }
                numColumns={windowDimensions.width <= 360 ? 1 : 2}
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => (
                    <MealItem
                        item={item}
                        navigationHandler={navigationHandler}
                    />
                )}
            />
        </View>
    );
};

export default MealsList;
