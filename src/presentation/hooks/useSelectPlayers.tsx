import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { useRouter } from "expo-router";

import { getAvailablePlayers } from "@/src/application/services";
import { Player } from "@/src/domain/entities";
import { TeamUpdateParams } from "@/src/domain/dtos";
import { useLoadTeam } from "./useLoadTeam";

export function useSelectPlayers() {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [availablePlayers, setAvailablePlayers] = useState<Player[]>([]);

  const router = useRouter();

  const { team, onUpdateTeam } = useLoadTeam();
  
  const togglePlayerSelection = (player: Player) => {
    if (selectedPlayers.some(p => p.id === player.id)) {
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
    } else {
      if (selectedPlayers.length < 11) {
        setSelectedPlayers([...selectedPlayers, player]);
      } else {
        Alert.alert('Limite atingido', 'Você já selecionou 11 jogadores para seu time.');
      }
    }
  };
  
  const handleFinish = useCallback(async () => {
    if (selectedPlayers.length < 11) {
      Alert.alert(
        'Time incompleto', 
        `Você selecionou ${selectedPlayers.length} de 11 jogadores. Deseja continuar mesmo assim?`,
        [
          { text: 'Cancelar', style: 'cancel' },
          { 
            text: 'Continuar', 
            onPress: () => {
              console.log('Time finalizado com', selectedPlayers.length, 'jogadores');
              router.back();
            }
          }
        ]
      );

      return;
    }

    const teamCompleted = {
      ...team,
      players: selectedPlayers,
    } as TeamUpdateParams;

    await onUpdateTeam(teamCompleted);

    router.navigate('/(tabs)/team');
  }, [selectedPlayers]);

  useEffect(() => {
    async function loadAvailablePlayers() {
      try {
        const response = await getAvailablePlayers();
        setAvailablePlayers(response);
      } catch (error) {
        
      }
    }

    loadAvailablePlayers();
  }, [])

  useEffect(() => {
    if (team) {
      setSelectedPlayers(team.players);
    }
  }, [team]);

  return {
    availablePlayers,
    selectedPlayers,
    handleFinish,
    togglePlayerSelection
  };
}
