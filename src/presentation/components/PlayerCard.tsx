import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/src/constants/Colors";
import { Ranking } from "@/src/domain/entities";
import { AvatarPlayer } from "./AvatarPlayer";
import { Icon } from "./Icon";

type PlayerCardProps = PressableProps & {
    player: Ranking;
};

export function PlayerCard({ player, ...othersProps }: PlayerCardProps) {
    return (
        <Pressable style={styles.container} {...othersProps}>
            <AvatarPlayer imageUri={player.image} size="xs" featuredColor={Colors.primary[100]} />

            <Text style={styles.positionText}>{player.position}</Text>

            <View style={styles.content}>
                <Text style={styles.playerName}>
                    {player.name}
                </Text>
                <Text style={styles.playerPoints}>
                    {`${player.rating} XP`}
                </Text>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Icon name="chevron-forward" color={Colors.primary[600]} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: { 
        height: 72, 
        flexDirection: 'row', 
        alignItems: 'center', 
        borderBottomWidth: 1, 
        borderBottomColor: Colors.primary[600] + 20 
    },
    content: { 
        marginLeft: 14 
    },
    playerName: { 
        color: Colors.white, 
        fontSize: 14, 
        fontFamily: 'Poppins_700Bold' 
    },
    playerPoints: { 
        color: Colors.white, 
        marginTop: 4, 
        fontSize: 14, 
        fontFamily: 'Poppins_400Regular',
        textTransform: 'uppercase',
    },
    positionText: {
        color: Colors.white, 
        fontSize: 14, 
        fontFamily: 'Poppins_500Medium', 
        marginLeft: 16
    },
});
