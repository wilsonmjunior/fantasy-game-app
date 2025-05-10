import { View, FlatList, Dimensions } from "react-native";

import { Colors } from "@/src/constants/Colors";

const screenWidth = Dimensions.get('screen').width;

const data = [ 
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
];

export function GamesLit() {
    return (
        <View style={{ marginTop: 40 }}>
            <FlatList 
                data={data}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                renderItem={({ item }) => (
                    <View
                        style={{
                            width: screenWidth - 40,
                            height: 200,
                            backgroundColor: Colors.neutral[200], 
                            borderRadius: 16
                        }}
                    >
                        
                    </View>
                )}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}
