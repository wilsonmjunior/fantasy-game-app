import { useEffect, useState } from "react"
import { Toast } from "toastify-react-native";

import { getFootballLiveMatches } from "@/src/application/services";
import { FootballMatch } from "@/src/domain/entities";

export function useFootballMatches() {
    const [liveMatches, setLiveMatches] = useState<FootballMatch[]>();

    useEffect(() => {
        async function load() {
            try {
                const response = await getFootballLiveMatches();
                console.log('delta:: ', response);
                setLiveMatches(response);
            } catch (error) {
                console.log('error: ', error);
                Toast.error('Erro ao obter jogos ao vivo.');
            }
        }

        load();
    }, []);

    return {
        liveMatches,
    }
}
