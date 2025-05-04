import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native"

import { Colors } from "@/src/constants/Colors";

type InputProps = TextInputProps & {
    title: string;
}

export function Input({ title, style, children, ...otherProps }: InputProps) {
    const [isFocused, setIsFocus] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <TextInput 
                style={[
                    styles.input, 
                    isFocused && { borderColor: Colors.primary[600] }, 
                    style,
                ]}
                placeholderTextColor={Colors.neutral[500]}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                {...otherProps}
            />

            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    label: {
        fontSize: 14,
        marginBottom: 8,
        color: Colors.primary[300],
        fontFamily: 'Poppins_400Regular'
    },
    input: {
        backgroundColor: Colors.neutral[800],
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        color: Colors.white,
        borderWidth: 1,
        borderColor: Colors.neutral[700],
        fontFamily: 'Poppins_400Regular'
    },
})