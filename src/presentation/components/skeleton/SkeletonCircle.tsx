import { memo } from "react";
import { DimensionValue, useColorScheme } from "react-native";
import { Skeleton } from "moti/skeleton";

type SkeletonCircleProps = {
    width?: DimensionValue;
    height: number;
};

export const SkeletonCircle = memo(({ width, height }: SkeletonCircleProps) => {
    const colorScheme = useColorScheme();
    const colorMode = colorScheme === 'dark' ? 'dark' : 'light';

    return (
        <Skeleton
            colorMode={colorMode}
            width={width}
            height={height}
            radius="round"
        />
    );
});
