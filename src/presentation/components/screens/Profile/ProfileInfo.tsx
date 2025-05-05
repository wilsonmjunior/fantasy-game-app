import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { Colors } from '@/src/constants/Colors';

type ProfileInfoProps = {
  name: string;
  email: string;
  avatarUrl: string;
};

export function ProfileInfo({ name, email, avatarUrl }: ProfileInfoProps) {
  return (
    <View style={styles.profileSection}>
      <Image 
        source={{ uri: avatarUrl }} 
        style={styles.profileImage} 
      />
      <Text style={styles.profileName}>{name}</Text>
      <Text style={styles.profileEmail}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: Colors.primary[600],
  },
  profileName: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
    color: Colors.white,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: Colors.neutral[400],
  },
}); 