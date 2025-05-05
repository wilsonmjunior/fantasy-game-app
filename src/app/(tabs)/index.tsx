import { StyleSheet, ScrollView } from 'react-native';

import { Colors } from '@/src/constants/Colors';
import { getStatusBarHeight } from '@/src/status-bar';
import { FeaturedFootballTeams, Header } from '@/src/presentation/components/screens/Home';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <FeaturedFootballTeams />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: getStatusBarHeight + 24, 
    paddingHorizontal: 20,
  },
});
