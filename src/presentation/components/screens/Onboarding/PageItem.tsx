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
import { Colors } from '@/src/constants/Colors';

type PageItemProps = {
    title: string;
    description: string;
};

export function PageItem({ title, description }: PageItemProps) {
  const logoScale = useSharedValue(0);
  const logoOpacity = useSharedValue(0);
  const titleTranslateY = useSharedValue(20);
  const titleOpacity = useSharedValue(0);
  const descriptionTranslateY = useSharedValue(20);
  const descriptionOpacity = useSharedValue(0);

  useEffect(() => {
    logoScale.value = withDelay(300, withSpring(1, { damping: 12 }));
    logoOpacity.value = withDelay(300, withTiming(1, { duration: 700 }));
    
    titleTranslateY.value = withDelay(600, withSpring(0, { damping: 10 }));
    titleOpacity.value = withDelay(600, withTiming(1, { duration: 700 }));
    
    descriptionTranslateY.value = withDelay(800, withSpring(0, { damping: 8 }));
    descriptionOpacity.value = withDelay(800, withTiming(1, { duration: 700 }));
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
          {title}
        </Animated.Text>
        <Animated.Text style={[styles.description, descriptionAnimatedStyle]}>
          {description}
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
    color: Colors.white,
  },
  description: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    textAlign: 'center',
    color: Colors.neutral[500],
    paddingHorizontal: 24,
  },
}); 
