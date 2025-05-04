import { StyleSheet, Text, View } from "react-native";

import { AvatarPlayer, AvatarSize } from "../../AvatarPlayer";
import { Colors } from "@/src/constants/Colors";

type PlayerProps = {
    name: string;
    avatarImage: string;
    avatarSize: AvatarSize;
    points: number;
};

export function RankingPlayer({
    name,
    avatarImage,
    avatarSize, 
    points 
}: PlayerProps) {
    return (
        <View style={styles.container}> 
            <AvatarPlayer imageUri={avatarImage} size={avatarSize} />
            <View style={styles.textContainer}>
                <Text style={styles.playerName}>{name}</Text>
                <Text style={styles.playerPoints}>{`${points} XP`}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    textContainer: {
        gap: 4,
        marginTop: 8,
        alignItems: 'center'
    },
    playerName: {
        color: Colors.white, 
        fontSize: 14, 
        fontFamily: 'Poppins_700Bold' 
    },
    playerPoints: {
        color: Colors.white, 
        fontSize: 14, 
        fontFamily: 'Poppins_400Regular' 
    },
})