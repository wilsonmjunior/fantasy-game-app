import { Pressable, StyleSheet, View } from "react-native";

import { Colors } from "@/src/constants/Colors";
import { Icon } from "../../Icon";

export function Header() {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => {}}>
                <Icon name="FGProfile" size={24} color={Colors.white} />
            </Pressable>

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
    }
});
