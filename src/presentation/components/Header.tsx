import {
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

import { Colors } from "@/src/constants/Colors";
import { Icon } from "./Icon";

type HeaderProps = {
    title: string;
    style?: StyleProp<ViewStyle>;
}

export function Header({ title, style }: HeaderProps) {
    const router = useRouter();

    return (
        <View style={[styles.container, style]}>
            <BorderlessButton onPress={() => router.back()}>
                <Icon name="chevron-back" size={24} color={Colors.white} />
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            <View style={{ width: 24 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        color: Colors.white,
        fontFamily: 'Poppins_600SemiBold'
    }
});
