import React, { memo } from "react";
import { DimensionValue, useColorScheme } from "react-native";
import { Skeleton } from "moti/skeleton";
import { Colors } from "@/src/constants/Colors";

type SkeletonTextProps = { 
    width?: DimensionValue;
    height: number;
};

export const SkeletonText = memo(({ width, height }: SkeletonTextProps) => {
    const colorScheme = useColorScheme();
    const colorMode = colorScheme === 'dark' ? "dark" : "light";

    return (
        <Skeleton
            colorMode={colorMode}
            backgroundColor={Colors.primary[200]}
            width={width}
            height={height}
        />
    );
});
