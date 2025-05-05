import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Colors } from '@/src/constants/Colors';
import { SectionContainer } from './SectionContainer';

type League = {
  id: string;
  name: string;
  position: string;
};

type LeagueItemProps = {
  name: string;
  position: string;
};

function LeagueItem({ name, position }: LeagueItemProps) {
  return (
    <View style={styles.leagueItem}>
      <Text style={styles.leagueName}>{name}</Text>
      <Text style={styles.leaguePosition}>{position}</Text>
    </View>
  );
}

type LeaguesSectionProps = {
  leagues?: League[];
};

export function LeaguesSection({ leagues }: LeaguesSectionProps) {
  const defaultLeagues: League[] = [
    { id: '1', name: 'Liga dos Amigos', position: '2º Lugar' },
    { id: '2', name: 'Campeonato Brasileiro', position: '15º Lugar' },
  ];

  const leaguesToRender = leagues || defaultLeagues;

  return (
    <SectionContainer title="Minhas Ligas">
      {leaguesToRender.map((league) => (
        <LeagueItem 
          key={league.id}
          name={league.name} 
          position={league.position} 
        />
      ))}
    </SectionContainer>
  );
}

const styles = StyleSheet.create({
  leagueItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[800],
  },
  leagueName: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: Colors.white,
  },
  leaguePosition: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: Colors.primary[500],
  },
}); 