import { Image, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/src/constants/Colors";

type TeamHeaderProps = {
    teamName: string;
    teamShield: string;
    roundPoints: number;
}

export function TeamHeader({ teamName, teamShield, roundPoints }: TeamHeaderProps) {
    return (
        <View style={styles.container}>
            <View style={styles.shieldWrapper}>
                <Image source={{ uri: teamShield }} style={styles.shield} />
            </View>

            <View style={{ marginTop: 16 }}>
                <Text style={styles.teamName}>{teamName}</Text>
                <Text style={styles.points}>Pontuação da rodada:{' '}
                    <Text style={{ fontWeight: 'bold' }}>
                        {roundPoints}
                    </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 24,
    },
    shieldWrapper: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: Colors.neutral[300],
        justifyContent: 'center',
        alignItems: 'center',
    },
    shield: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: Colors.neutral[100],
    },
    teamName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary[50],
        textAlign: 'center'
    },
    points: {
        fontSize: 16,
        color: Colors.primary[600],
        marginTop: 4,
    },
});
