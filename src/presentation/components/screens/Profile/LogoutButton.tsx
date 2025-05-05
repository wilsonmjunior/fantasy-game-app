import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '@/src/constants/Colors';

type LogoutButtonProps = {
  onPress: () => void;
};

export function LogoutButton({ onPress }: LogoutButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.logoutButton} 
      onPress={onPress}
    >
      <Text style={styles.logoutText}>Sair</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: Colors.secondary[800],
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 24,
  },
  logoutText: {
    color: Colors.primary[500],
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  }
}); 