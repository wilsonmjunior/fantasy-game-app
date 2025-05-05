import { Fragment } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

import { Colors } from '@/src/constants/Colors';
import { Header, Icon, TeamPlayerCard } from '@/src/presentation/components';
import { TeamHeader, EmptyTeam } from '@/src/presentation/components/screens/Team';
import { useLoadTeam } from '@/src/presentation/hooks';
import { getStatusBarHeight } from '@/src/status-bar';

export default function TeamScreen() {
  const router = useRouter();

  const { team } = useLoadTeam();

  const handleEditPress = (teamId: string) => {
    router.push(`/(tabs)/team/edit/${teamId}`);
  };

  return (
    <View style={styles.container}>
      <Header title="Time" />
      
      {
        team ? (
          <Fragment>
            <View style={styles.editButtonContainer}>
              <TouchableOpacity 
                onPress={() => handleEditPress(team.id)}
                style={styles.editButton}
                activeOpacity={0.7}
              >
                <Icon name="pencil" color={Colors.white} size={16} />
              </TouchableOpacity>
            </View>

            <FlatList 
              data={team.players}
              keyExtractor={(item) => item.id}
              numColumns={2}
              ListHeaderComponent={() => (
                <TeamHeader
                  totalRating={team.totalRating}
                  teamName={team.name}
                  teamShield={team.shield} 
                />
              )}
              renderItem={({ item }) => (
                <TeamPlayerCard player={item} />
              )}
              columnWrapperStyle={styles.columnWrapper}
              showsVerticalScrollIndicator={false}
            />
          </Fragment>
        ) : (
          <EmptyTeam />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: getStatusBarHeight + 24,
    paddingHorizontal: 20,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  editButtonContainer: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  editButton: {
    width: 26, 
    height: 26, 
    borderRadius: 4, 
    backgroundColor: Colors.primary[50]+20, 
    alignItems: 'center', 
    justifyContent: 'center',
  }
});
