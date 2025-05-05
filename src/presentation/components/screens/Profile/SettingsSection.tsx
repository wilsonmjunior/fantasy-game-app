import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '@/src/constants/Colors';
import { SectionContainer } from './SectionContainer';

type SettingItem = {
  id: string;
  label: string;
  onPress: () => void;
};

type SettingItemProps = {
  label: string;
  onPress: () => void;
};

function SettingItem({ label, onPress }: SettingItemProps) {
  return (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <Text style={styles.settingLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

type SettingsSectionProps = {
  settings?: SettingItem[];
};

export function SettingsSection({ settings }: SettingsSectionProps) {
  const defaultSettings: SettingItem[] = [
    { id: '1', label: 'Notificações', onPress: () => {} },
    { id: '2', label: 'Privacidade', onPress: () => {} },
    { id: '3', label: 'Sobre o App', onPress: () => {} },
  ];

  const settingsToRender = settings || defaultSettings;

  return (
    <SectionContainer title="Configurações">
      {settingsToRender.map((setting) => (
        <SettingItem 
          key={setting.id}
          label={setting.label} 
          onPress={setting.onPress} 
        />
      ))}
    </SectionContainer>
  );
}

const styles = StyleSheet.create({
  settingItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[800],
  },
  settingLabel: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: Colors.white,
  },
}); 