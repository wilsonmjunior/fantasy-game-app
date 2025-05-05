import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

import { Colors } from '@/src/constants/Colors';
import { Header } from '@/src/presentation/components';
import {
  ProfileInfo,
  StatsSection,
  LeaguesSection,
  SettingsSection,
  LogoutButton
} from '@/src/presentation/components/screens/Profile';
import { getStatusBarHeight } from '../status-bar';

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Header title="Perfil" style={styles.header} />

      <ScrollView style={styles.content}>
        <ProfileInfo 
          name="John Doe"
          email="johndoe@example.com"
          avatarUrl="https://i.pravatar.cc/150"
        />

        <StatsSection />
        
        <LeaguesSection />
        
        <SettingsSection />

        <LogoutButton onPress={handleLogout} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: getStatusBarHeight,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 16
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
}); 
