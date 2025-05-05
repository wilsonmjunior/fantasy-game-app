import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Colors } from "@/src/constants/Colors";
import { Icon } from "../../Icon";

export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Pressable onPress={() => {}}>
                    <Icon name="FGProfile" size={24} color={Colors.white} />
                </Pressable>

                <Text style={styles.profileName}>Jonh Doe</Text>
            </View>

            <Pressable onPress={() => {}}>
                <Icon name="FGNotifications" size={24} color={Colors.white} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileName: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        color: Colors.white,
        marginLeft: 8,
    }
});
