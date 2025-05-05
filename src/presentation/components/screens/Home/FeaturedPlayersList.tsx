import { View, FlatList, Image, StyleSheet, Text } from "react-native";

import { Colors } from "@/src/constants/Colors";

const data = [
    {
        id: '2',
        name: 'John Doe',
        score: '120.20'
    },
    {
        id: '3',
        name: 'John Doe',
        score: '120.20'
    },
    {
        id: '4',
        name: 'John Doe',
        score: '120.20'
    },
    {
        id: '5',
        name: 'John Doe',
        score: '120.20'
    },
    {
        id: '6',
        name: 'John Doe',
        score: '120.20'
    },
    {
        id: '7',
        name: 'John Doe',
        score: '120.20'
    }
];

export function FeaturedPlayersList() {
    return (
        <View style={{ marginTop: 40 }}>
            <Text style={styles.title}>
                Destaque
            </Text>

            <FlatList
                data={data} 
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                renderItem={({ item }) => (
                    <View>
                        <View style={styles.container}>
                            <View style={styles.content}>
                                <Image
                                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdpgjJWcHi-bdDMsDmOO4Yrk9pBcDYQsO4Q&s" }}
                                    style={[styles.image, { width: 64, height: 64 }]}
                                />
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id } 
                showsHorizontalScrollIndicator={false}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.white,
    },
    container: { 
        width: 78, 
        height: 78, 
        borderRadius: 39, 
        backgroundColor: Colors.neutral[300],
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: { 
        width: 64, 
        height: 64, 
        borderRadius: 32, 
        backgroundColor: Colors.neutral[100],
    },
    image: { 
        borderRadius: 32,
    },
    list: {
        marginTop: 16,
    }
});
