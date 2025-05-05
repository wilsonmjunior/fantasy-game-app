import { Stack } from "expo-router";

export default function EditLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="[team-id]" /> 
            <Stack.Screen 
                name="select-players" 
                options={{
                    animation: 'slide_from_right'
                }}
            />
        </Stack>
    );
}
