import { StyleSheet, Text, View } from "react-native";

import { AvatarPlayer, AvatarSize } from "../../AvatarPlayer";
import { Colors } from "@/src/constants/Colors";

type PlayerProps = {
    name: string;
    avatarImage: string;
    avatarSize: AvatarSize;
    rating: number;
    position: number;
};

export function RankingPlayer({
    name,
    avatarImage,
    avatarSize, 
    rating,
    position,
}: PlayerProps) {
    return (
        <View style={styles.container}> 
            <AvatarPlayer imageUri={avatarImage} size={avatarSize} />
            <View style={styles.textContainer}>
                <Text style={styles.playerName}>{position}</Text>
                <Text style={styles.playerName}>{name}</Text>
                <Text style={styles.playerRating}>{`${rating} XP`}</Text>
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
        fontFamily: 'Poppins_600SemiBold',
    },
    playerRating: {
        color: Colors.white, 
        fontSize: 12, 
        fontFamily: 'Poppins_400Regular' 
    },
})