import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";

import { getTeam, updateTeam } from "@/src/application/services";
import { Team } from "@/src/domain/entities";

type UseEditParams = {
  teamId: string;
}

export function useEditTeam({ teamId }: UseEditParams) {
  const [team, setTeam] = useState<Team>();
  const [teamName, setTeamName] = useState('');
  const [teamShield, setTeamShield] = useState('');
  const [isImageValid, setIsImageValid] = useState(true);

  const checkImageUrl = (url: string) => {
    setTeamShield(url);
    const urlPattern = /\.(jpeg|jpg|gif|png|bmp|svg)$/i;
    setIsImageValid(urlPattern.test(url));
  };

  const handleNext = useCallback(async () => {
    try {
      if (!team) {
        Alert.alert('Erro', 'Não há dados para o time.');
        return;
      }

      if (!teamName?.trim()) {
        Alert.alert('Erro', 'O nome do time não pode estar vazio.');
        return;
      }
  
      if (!isImageValid) {
        Alert.alert('Erro', 'A URL da imagem parece ser inválida.');
        return;
      }

      await updateTeam({
        ...team,
        name: teamName,
        shield: teamShield,
      });
      
      router.push('/(tabs)/team/edit/select-players'); 
    } catch (error) {
      console.log('delta:error: ', error);
      Alert.alert('Erro', 'Erro ao salvar dados do time.');
    }
  }, [
    team,
    isImageValid,
    teamName,
    teamShield,
  ]);

  useEffect(() => {
    async function loadTeam() {
      try {
        const response = await getTeam(Number(teamId));
        setTeam(response);
        setTeamName(response.name);
        setTeamShield(response.shield);
      } catch (error) {
      }
    }

    if (teamId) {
      loadTeam();
    }
  }, [teamId]);

  return {
    checkImageUrl,
    isImageValid, 
    team,
    teamName,
    teamShield,
    setTeamShield,
    // setIsImageValid,
    setTeamName,
    handleNext,
  };
}
