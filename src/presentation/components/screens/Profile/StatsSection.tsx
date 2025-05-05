import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Colors } from '@/src/constants/Colors';
import { SectionContainer } from './SectionContainer';

type StatItemProps = {
  label: string;
  value: string;
};

function StatItem({ label, value }: StatItemProps) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

type StatsSectionProps = {
  ranking?: string;
  totalPoints?: string;
  bestPosition?: string;
};

export function StatsSection({ 
  ranking = '27º', 
  totalPoints = '1,842 pts', 
  bestPosition = '12º' 
}: StatsSectionProps) {
  return (
    <SectionContainer title="Estatísticas da Temporada">
      <StatItem label="Posição no Ranking" value={ranking} />
      <StatItem label="Pontuação Total" value={totalPoints} />
      <StatItem label="Melhor Colocação" value={bestPosition} />
    </SectionContainer>
  );
}

const styles = StyleSheet.create({
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: Colors.neutral[300],
  },
  statValue: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: Colors.primary[500],
  },
}); 