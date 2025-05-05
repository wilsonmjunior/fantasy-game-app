import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black,
  useFonts,
} from '@expo-google-fonts/poppins';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ToastManager from 'toastify-react-native'

import { Colors } from '../constants/Colors';
 
SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1 * 1000,
  fade: true
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <Stack 
          screenOptions={{ 
            headerShown: false,
            animation: 'fade',
          }}
          initialRouteName="onboarding"
        >
          <Stack.Screen 
            name="index" 
            options={{ 
              headerShown: false,
              gestureEnabled: false,
            }} 
          />
          <Stack.Screen 
            name="onboarding/index" 
            options={{ 
              headerShown: false,
              animation: 'fade',
              gestureEnabled: false,
            }} 
          />
          <Stack.Screen 
            name="(tabs)" 
            options={{ 
              headerShown: false,
              gestureEnabled: false,
            }} 
          />
          <Stack.Screen 
            name="profile" 
            options={{ 
              headerShown: false,
              animation: 'slide_from_left',
              gestureEnabled: true,
            }} 
          />
        </Stack>
      </SafeAreaProvider>

      <ToastManager />
    </GestureHandlerRootView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: Colors.background
  }
});
