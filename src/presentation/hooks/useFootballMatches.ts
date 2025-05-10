import { useEffect, useState } from "react"
import { Toast } from "toastify-react-native";

import { getFootballLiveMatches } from "@/src/application/services";
import { FootballMatch } from "@/src/domain/entities";

export function useFootballMatches() {
    const [liveMatches, setLiveMatches] = useState<FootballMatch[]>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                setIsLoading(true);
                const response = await getFootballLiveMatches();
                setLiveMatches(response);
            } catch (error) {
                console.log('error: ', error);
                Toast.error('Erro ao obter jogos ao vivo.');
            } finally {
                setIsLoading(false);
            }
        }

        load();
    }, []);

    return {
        liveMatches,
        isLoading,
    }
}
