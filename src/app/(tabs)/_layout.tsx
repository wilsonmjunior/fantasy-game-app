import { Tabs } from 'expo-router';

import { Colors } from '@/src/constants/Colors';
import { Icon } from '@/src/presentation/components';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          textAlign: 'center',
          marginTop: 5,
        },
        tabBarStyle: {
          backgroundColor: Colors.secondary[900],
          borderTopWidth: 0,
          height: 100,
          paddingTop: 6,
          shadowColor: Colors.black,
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.05,
          shadowRadius: 3,
          elevation: 4,
        },
        tabBarActiveTintColor: Colors.primary[600],
        tabBarInactiveTintColor: Colors.white,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ size, color, focused }) => <Icon name="FGHome" size={size} color={color} fill={focused ? color : 'none'} />,
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          title: 'Ranking',
          tabBarIcon: ({ size, color, focused }) => <Icon name="FGGaming" size={size} color={color}  fill={focused ? color : 'none'} />,
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          title: 'Time',
          tabBarIcon: ({ size, color, focused }) => <Icon name="FGUsers" size={size} color={color}  fill={focused ? color : 'none'} />,
        }}
      />
    </Tabs>
  );
}