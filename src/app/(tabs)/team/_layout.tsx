import { LoadTeamProvider } from "@/src/presentation/hooks/useLoadTeam";
import { Stack } from "expo-router";
import { Platform } from "react-native";

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
                        presentation: 'modal',
                        contentStyle: {
                            paddingTop: Platform.OS === 'android' ? 24 : 0,
                            backgroundColor: '#1C1C1C'
                        }
                    }} 
                />
            </Stack>
        </LoadTeamProvider>
    );
}
