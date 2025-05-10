import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  BackHandler,
  Platform,
} from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSpring
} from 'react-native-reanimated';

import { Colors } from '../../constants/Colors';
import { Button } from '../../presentation/components';
import { PageItem } from '../../presentation/components/screens/Onboarding';

const { width } = Dimensions.get('window');

const pages = [
  { id: '1', title: 'Bem-vindo ao Fantasy Game', description: 'Crie times virtuais com jogadores reais e compita com seus amigos' },
  { id: '2', title: 'Acompanhe Suas Competições', description: 'Acompanhe a pontuação em tempo real e veja como seu time está se saindo' },
  { id: '3', title: 'Crie suas Próprias Ligas', description: 'Convide seus amigos e crie ligas personalizadas para competir entre vocês' },
] as const;

export default function OnboardingScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  const navigation = useNavigation();
  const flatListRef = useRef<FlatList>(null);
  
  const fadeAnim = useSharedValue(1);
  const buttonScale = useSharedValue(1);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (currentPage > 0) {
        goToPreviousPage();
        return true;
      }
      return false;
    });

    return () => backHandler.remove();
  }, [currentPage]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setCurrentPage(0);
      setTimeout(() => {
        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({
            index: 0,
            animated: false,
          });
        }
      }, 0);
    });

    return unsubscribe;
  }, [navigation]);

  const goToNextPage = useCallback((nextPage: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentPage(nextPage);
    
    try {
      setTimeout(() => {
        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({
            index: nextPage,
            animated: false,
          });
        }
        setIsTransitioning(false);
      }, 50);
    } catch (error) {
      console.error('Error scrolling to index:', error);
      setIsTransitioning(false);
    }
  }, [isTransitioning]);

  const goToPreviousPage = useCallback(() => {
    if (currentPage <= 0 || isTransitioning) return;
    
    const prevPage = currentPage - 1;
    
    setIsTransitioning(true);
    fadeAnim.value = withTiming(0.5, { duration: 150 });
    
    setTimeout(() => {
      setCurrentPage(prevPage);
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: prevPage,
          animated: false,
        });
      }
      
      setTimeout(() => {
        fadeAnim.value = withTiming(1, { duration: 250 });
        setIsTransitioning(false);
      }, 50);
    }, 200);
  }, [currentPage, isTransitioning, fadeAnim]);

  const navigateToHome = useCallback(() => {
    router.replace('/');
  }, [router]);

  const handleNext = () => {
    if (isTransitioning) return;
    
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
  };

  const handleSkip = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    fadeAnim.value = withTiming(0, { duration: 300 });
    
    setTimeout(() => {
      navigateToHome();
    }, 300);
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
          renderItem={({ item }) => (
            <View style={{ width }}>
              <PageItem title={item.title} description={item.description} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          pagingEnabled
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          windowSize={3}
          removeClippedSubviews={false}
          extraData={currentPage} 
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
          <View style={isTransitioning ? styles.disabledButton : null}>
            <Button 
              title="Pular" 
              variant="secondary" 
              onPress={isTransitioning ? undefined : handleSkip}
            />
          </View>
          <Animated.View style={[animatedButtonStyle, isTransitioning ? styles.disabledButton : null]}>
            <Button 
              title={currentPage === pages.length - 1 ? "Começar" : "Próximo"} 
              variant="primary"
              onPress={isTransitioning ? undefined : handleNext}
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
    paddingBottom: Platform.OS === 'android' ? 24 : 0,
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
  disabledButton: {
    opacity: 0.6,
  },
}); 
