import { LoadTeamProvider } from "@/src/presentation/hooks/useLoadTeam";
import { Stack } from "expo-router";

export default function TeamLayout() {
    return (
        <LoadTeamProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="index" /> 
                <Stack.Screen 
                    name="edit" 
                    options={{
                        presentation: 'modal'
                    }} 
                />
            </Stack>
        </LoadTeamProvider>
    );
}
