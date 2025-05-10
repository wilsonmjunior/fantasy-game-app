import { View, StyleSheet } from "react-native";
import { SkeletonText, SkeletonCircle } from "@/src/presentation/components";
import { Colors } from "@/src/constants/Colors";
import { getStatusBarHeight } from "@/src/status-bar";

export function RankingSkeleton() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {[1, 2, 3].map((position) => (
                    <View key={position} style={styles.topPlayerContainer}>
                        <SkeletonCircle 
                            width={position === 2 ? 128 : 96} 
                            height={position === 2 ? 128 : 96} 
                        />

                        <View style={styles.playerInfo}>
                            <SkeletonText width={30} height={24} />
                            <SkeletonText width={60} height={14} />
                            <SkeletonText width={60} height={14} />
                        </View>
                    </View>
                ))}
            </View>

            <View style={styles.listContainer}>
                {[1, 2, 3, 4, 5].map((index) => (
                    <View key={index} style={styles.listItem}>
                        <SkeletonCircle width={56} height={56} />
                        <View style={styles.listItemInfo}>
                            <SkeletonText width={120} height={16} />
                            <SkeletonText width={80} height={14} />
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 20,
        paddingTop: getStatusBarHeight + 24,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 16,
    },
    topPlayerContainer: {
        alignItems: 'center',
        gap:  16,
    },
    playerInfo: {
        alignItems: 'center',
        gap: 4,
    },
    listContainer: {
        gap: 20,
        marginTop: 24,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    listItemInfo: {
        gap: 4,
    },
});
