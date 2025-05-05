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

export default function OnboardingPage2() {
  const logoScale = useSharedValue(0.8);
  const logoOpacity = useSharedValue(0);
  const titleTranslateX = useSharedValue(-30);
  const titleOpacity = useSharedValue(0);
  const descriptionTranslateY = useSharedValue(20);
  const descriptionOpacity = useSharedValue(0);

  useEffect(() => {
    logoScale.value = withDelay(300, withSpring(1, { damping: 10 }));
    logoOpacity.value = withTiming(1, { duration: 800 });
    
    titleTranslateX.value = withDelay(400, withSpring(0, { damping: 15 }));
    titleOpacity.value = withDelay(400, withTiming(1, { duration: 600 }));
    
    descriptionTranslateY.value = withDelay(700, withSpring(0, { damping: 8 }));
    descriptionOpacity.value = withDelay(700, withTiming(1, { duration: 600 }));
  }, []);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
    opacity: logoOpacity.value,
  }));

  const titleAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: titleTranslateX.value }],
    opacity: titleOpacity.value,
  }));

  const descriptionAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: descriptionTranslateY.value }],
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
          Acompanhe Suas Competições
        </Animated.Text>
        <Animated.Text style={[styles.description, descriptionAnimatedStyle]}>
          Acompanhe a pontuação em tempo real e veja como seu time está se saindo
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
    color: Colors.primary[800],
  },
  description: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    textAlign: 'center',
    color: Colors.neutral[700],
    paddingHorizontal: 24,
  },
}); 
