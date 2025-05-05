import React, { useRef, useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSpring,
  runOnJS
} from 'react-native-reanimated';

import { Colors } from '../../constants/Colors';
import { Button } from '../../presentation/components';

import OnboardingPage1 from '@/src/app/onboarding/page1';
import OnboardingPage2 from '@/src/app/onboarding/page2';
import OnboardingPage3 from '@/src/app/onboarding/page3';

const { width } = Dimensions.get('window');

const pages = [
  { id: '1', component: OnboardingPage1 },
  { id: '2', component: OnboardingPage2 },
  { id: '3', component: OnboardingPage3 },
];

const PageItem = ({ Component }: { Component: React.ComponentType }) => {
  return (
    <View style={{ width }}>
      <Component />
    </View>
  );
};

export default function OnboardingScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);
  
  const fadeAnim = useSharedValue(1);
  const buttonScale = useSharedValue(1);

  const goToNextPage = useCallback((nextPage: number) => {
    setCurrentPage(nextPage);
    
    setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: nextPage,
          animated: false,
        });
      }
    }, 10);
  }, []);

  const navigateToHome = useCallback(() => {
    router.navigate('/');
  }, [router]);

  const handleNext = () => {
    try {
      buttonScale.value = withSpring(0.95);
      setTimeout(() => {
        buttonScale.value = withSpring(1);
      }, 100);

      if (currentPage < pages.length - 1) {
        const nextPage = currentPage + 1;
        
        fadeAnim.value = withTiming(0.5, { duration: 150 });
        
        setTimeout(() => {
          goToNextPage(nextPage);
          
          setTimeout(() => {
            fadeAnim.value = withTiming(1, { duration: 250 });
          }, 50);
        }, 200);
      } else {
        navigateToHome();
      }
    } catch (error) {
      console.error('Error in handleNext:', error);
      if (currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
      } else {
        router.navigate('/');
      }
    }
  };

  const handleSkip = () => {
    router.navigate('/');
  };

  const animatedContentStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value
    };
  });

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: buttonScale.value }
      ]
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.pagesContainer, animatedContentStyle]}>
        <FlatList
          ref={flatListRef}
          data={pages}
          renderItem={({ item }) => <PageItem Component={item.component} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          pagingEnabled
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          windowSize={3}
          removeClippedSubviews={false}
        />
      </Animated.View>
      
      <View style={styles.footer}>
        <View style={styles.indicators}>
          {pages.map((_, index) => (
            <View 
              key={index}
              style={[
                styles.indicator, 
                currentPage === index && styles.activeIndicator
              ]} 
            />
          ))}
        </View>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Pular" 
            variant="secondary" 
            onPress={handleSkip}
          />
          <Animated.View style={animatedButtonStyle}>
            <Button 
              title={currentPage === pages.length - 1 ? "Começar" : "Próximo"} 
              variant="primary"
              onPress={handleNext}
            />
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  pagesContainer: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.neutral[200],
    marginHorizontal: 4,
  },
  activeIndicator: {
    width: 24,
    backgroundColor: Colors.primary[600],
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
}); 