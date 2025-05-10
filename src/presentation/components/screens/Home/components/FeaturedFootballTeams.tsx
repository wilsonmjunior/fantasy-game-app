import { FlatList, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/src/constants/Colors";
import { FootballMatch } from "@/src/domain/entities";
import { FeaturedFootballTeam } from "./FeaturedFootballItem";

type FeaturedFootballTeamsProps = {
    liveMatches?: FootballMatch[]
};

export function FeaturedFootballTeams({ liveMatches }: FeaturedFootballTeamsProps) {
    return (
        <View>
            <Text style={styles.title}>Jogos ao vivo</Text>

            <FlatList 
                data={liveMatches}
                horizontal
                renderItem={({ item }) => (
                    <FeaturedFootballTeam item={item} />
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
