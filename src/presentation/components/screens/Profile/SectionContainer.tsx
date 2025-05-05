import React, { ReactNode } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Colors } from '@/src/constants/Colors';

type SectionContainerProps = {
  title: string;
  children: ReactNode;
};

export function SectionContainer({ title, children }: SectionContainerProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: Colors.secondary[900],
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: Colors.white,
    marginBottom: 16,
  },
}); 