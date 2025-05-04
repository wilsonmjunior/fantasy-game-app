import { Image, StyleSheet, View } from "react-native";

import { Colors } from "@/src/constants/Colors";

const sizes = {
    xs: {
        size: 56,
        padding: 8,
    },
    sm: {
        size: 78,
        padding: 12,
    },
    md: {
        size: 96,
        padding: 16,
    },
    lg: {
        size: 128,
        padding: 20,
    },
};

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg';

type PlayerProps = {
    imageUri: string;
    size?: AvatarSize;
}

export function AvatarPlayer({ imageUri, size = 'sm' }: PlayerProps) {
    return (
        <View 
            style={[styles.container, { 
                width: sizes[size]?.size,
                height: sizes[size]?.size,
            }]}
        >
            <Image 
                source={{ uri: imageUri }} 
                style={[styles.image, { 
                    width: sizes[size]?.size - sizes[size]?.padding,
                    height: sizes[size]?.size - sizes[size]?.padding,
                }]} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: Colors.neutral[300],
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: '50%',
    },
    image: {
        backgroundColor: Colors.neutral[100],
        borderRadius: '50%',
    }
});
