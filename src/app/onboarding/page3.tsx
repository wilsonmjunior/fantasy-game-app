import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withDelay,
  withSpring,
} from 'react-native-reanimated';

import Logo from '@/assets/images/logo.png';

import { Colors } from '../../constants/Colors';

export default function OnboardingPage3() {
  const logoScale = useSharedValue(0.8);
  const logoOpacity = useSharedValue(0);
  const titleTranslateY = useSharedValue(-30);
  const titleOpacity = useSharedValue(0);
  const descriptionTranslateX = useSharedValue(50);
  const descriptionOpacity = useSharedValue(0);

  useEffect(() => {
    logoScale.value = withDelay(300, withSpring(1.1, { damping: 10 }));
    logoOpacity.value = withTiming(1, { duration: 800 });
    
    titleTranslateY.value = withDelay(500, withSpring(0, { damping: 12 }));
    titleOpacity.value = withDelay(500, withTiming(1, { duration: 600 }));
    
    descriptionTranslateX.value = withDelay(700, withSpring(0, { damping: 10 }));
    descriptionOpacity.value = withDelay(700, withTiming(1, { duration: 600 }));
  }, []);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
    opacity: logoOpacity.value,
  }));

  const titleAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: titleTranslateY.value }],
    opacity: titleOpacity.value,
  }));

  const descriptionAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: descriptionTranslateX.value }],
    opacity: descriptionOpacity.value,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.Image 
          source={Logo} 
          style={[styles.image, logoAnimatedStyle]} 
        />
      </View>
      <View style={styles.textContainer}>
        <Animated.Text style={[styles.title, titleAnimatedStyle]}>
          Crie suas Próprias Ligas
        </Animated.Text>
        <Animated.Text style={[styles.description, descriptionAnimatedStyle]}>
          Convide seus amigos e crie ligas personalizadas para competir entre vocês
        </Animated.Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
    color: Colors.primary[600],
  },
  description: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    textAlign: 'center',
    color: Colors.neutral[600],
    paddingHorizontal: 24,
  },
}); 
