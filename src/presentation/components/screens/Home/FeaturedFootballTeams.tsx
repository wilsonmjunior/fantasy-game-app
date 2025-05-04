import { Colors } from "@/src/constants/Colors";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

const width = Dimensions.get('screen').width/1.5;

function FeaturedFootballTeam() {
    return (
        <View style={styles2.container}>

        </View>
    );
}

const styles2 = StyleSheet.create({
    container: {
        width,
        height: 144,
        backgroundColor: 'white',
        borderRadius: 16,
    }
});

export function FeaturedFootballTeams() {
    return (
        <View>
            <Text style={styles.title}>Jogos ao vivo</Text>

            <FlatList 
                data={[1,2]}
                horizontal
                renderItem={({ item }) => (
                    <FeaturedFootballTeam />
                )}
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                style={styles.list}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.white,
        marginTop: 24,
    },
    list: {
        marginTop: 24,
    }
});
