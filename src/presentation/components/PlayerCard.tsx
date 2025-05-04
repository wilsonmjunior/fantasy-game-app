import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/src/constants/Colors";
import { AvatarPlayer } from "./AvatarPlayer";
import { Icon } from "./Icon";

type PlayerCardProps = {

};

export function PlayerCard({ }: PlayerCardProps) {
    return (
        <View style={styles.container}>
            <AvatarPlayer 
                imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdpgjJWcHi-bdDMsDmOO4Yrk9pBcDYQsO4Q&s"
                size="xs"
            />

            <View style={styles.content}>
                <Text style={styles.playerName}>
                    John Doe
                </Text>
                <Text style={styles.playerPoints}>
                    10 xp
                </Text>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Pressable>
                    <Icon name="chevron-forward" color={Colors.primary[600]} />
                </Pressable>
            </View>
        </View>
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
        fontFamily: 'Poppins_400Regular' 
    },
});
