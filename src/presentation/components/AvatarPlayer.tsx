import { Image, StyleSheet, View } from "react-native";

import { Colors } from "@/src/constants/Colors";

const sizes = {
    xs: {
        size: 56,
        padding: 4,
    },
    sm: {
        size: 78,
        padding: 6,
    },
    md: {
        size: 96,
        padding: 8,
    },
    lg: {
        size: 128,
        padding: 10,
    },
};

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg';

type PlayerProps = {
    imageUri: string;
    size?: AvatarSize;
    featuredColor?: string;
}

export function AvatarPlayer({ 
    imageUri, 
    size = 'sm', 
    featuredColor = Colors.primary[600],
}: PlayerProps) {
    return (
        <View 
            style={[styles.container, { 
                width: sizes[size]?.size,
                height: sizes[size]?.size,
                backgroundColor: featuredColor,
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
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 64,
    },
    image: {
        backgroundColor: Colors.neutral[100],
        borderRadius: 64,
    }
});
