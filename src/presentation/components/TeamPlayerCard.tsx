import { memo } from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Colors } from "@/src/constants/Colors";
import { Player } from "@/src/domain/entities";
import { Icon } from "./Icon";

type TeamPlayerCardProps = {
  player: Player;
  isSelected?: boolean;
  onToggle?: () => void;
}

function TeamPlayerCardComponent({ player, isSelected, onToggle }: TeamPlayerCardProps) {
  return (
    <RectButton 
      style={[styles.container, isSelected && styles.selected]} 
      onPress={onToggle}
      activeOpacity={onToggle ? 0.4 : 0}
    >
      <View style={styles.header}>
        <View style={styles.clubImageBadge}>
          <Image source={{ uri: player.clubImage }} style={{ width: 24, height: 24 }} />
        </View>
      
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingBadgeText}>
            {`${player.rating} XP`}
          </Text>
        </View>
      </View>
      
      <Image source={{ uri: player.image }} style={styles.playerImage} />
      
      <View style={styles.content}> 
        <Text style={styles.playerName} numberOfLines={1}>{player.name}</Text>
        <View style={styles.positionBadge}>
          <Text style={styles.positionBadgeText}>{player.fieldPosition}</Text>
        </View>
      </View>
      
      {isSelected && (
        <View style={styles.checkmarkContainer}>
          <Icon name="checkmark-circle" size={24} color={Colors.primary[500]} />
        </View>
      )}
    </RectButton>
  );
};

export const TeamPlayerCard = memo(TeamPlayerCardComponent);

const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: Colors.neutral[800],
    borderRadius: 12,
    marginVertical: 8,
    padding: 12,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  selected: {
    borderWidth: 2,
    borderColor: Colors.primary[500],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
  },
  clubImageBadge: {
    height: 32,
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.neutral[500],
    borderRadius: 8,
  },

  positionBadge: {
    backgroundColor: Colors.neutral[500],
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  positionBadgeText: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    textTransform: 'uppercase',
  },
  
  ratingBadge: {
    height: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.neutral[500],
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  ratingBadgeText: {
    fontSize: 12,
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase',
    color: Colors.primary[600],
  },

  playerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginVertical: 8,
    backgroundColor: Colors.neutral[900],
    borderWidth: 1,
    borderColor: Colors.neutral[100],
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  playerName: {
    color: Colors.white,
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'center',
  },

  checkmarkContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});
