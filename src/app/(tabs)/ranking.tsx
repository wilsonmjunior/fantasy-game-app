import { FlatList, StyleSheet, View } from "react-native";

import { Colors } from "@/src/constants/Colors";
import { getStatusBarHeight } from "@/src/status-bar";
import { Header, PlayerCard } from "@/src/presentation/components";
import { RankingPlayer, RankingSkeleton } from "@/src/presentation/components/screens/Ranking";
import { useRanking } from "@/src/presentation/hooks";

export default function RankingScreen() {
    const { ranking, topRanking, isLoading } = useRanking();

    if (isLoading) {
        return <RankingSkeleton />
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header title="Ranking" />
            </View>

            <FlatList 
                data={ranking}
                ListHeaderComponent={() => (
                    <View style={styles.content}>
                        {
                            topRanking.map((top, index) => (
                                <RankingPlayer
                                    key={`${index}-${top.name}`}
                                    avatarImage={top.image}
                                    avatarSize={top.position === 1 ? "lg" : "md"}
                                    name={top.name}
                                    rating={top.rating} 
                                    position={top.position} 
                                />
                            ))
                        }
                    </View>
                )}
                ListHeaderComponentStyle={styles.listHeader}
                keyExtractor={(item, index) => `${index}-${item.name}`}
                renderItem={({ item }) => (
                    <PlayerCard player={item} />
                )}
                style={{ 
                    paddingHorizontal: 20,
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingTop: getStatusBarHeight + 24,
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 24,
    },
    listHeader: {
        marginBottom: 24,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 10,
    },
});
