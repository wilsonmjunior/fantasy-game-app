import {
    StyleSheet,
    View,
    Text,
    StyleProp,
    ViewStyle,
} from "react-native";

import { Colors } from "@/src/constants/Colors";
import { Player } from "@/src/domain/entities";

type PlayersProgressProps = {
    selectedPlayers: Player[];
    total: number;
    style?: StyleProp<ViewStyle>;
};

export function PlayersProgress({
    selectedPlayers,
    total,
    style,
}: PlayersProgressProps) {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.selectedCount}>
                {`${selectedPlayers.length} de ${total} jogadores selecionados`} 
            </Text>
            <View style={styles.progressBar}>
                <View 
                    style={[
                        styles.progressFill, 
                        { width: `${(selectedPlayers.length / total) * 100}%` }
                    ]} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    selectedCount: {
        fontSize: 14,
        color: Colors.primary[100],
        marginBottom: 8,
    },
    progressBar: {
        height: 8,
        backgroundColor: Colors.neutral[700],
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: Colors.primary[500],
        borderRadius: 4,
    }
});
