import { useEffect, useState } from "react";

import { getRanking } from "@/src/application/services";
import { Ranking } from "@/src/domain/entities";

export function useRanking() {
    const [ranking, setRanking] = useState<Ranking[]>([]);
    const [topRanking, setTopRanking] = useState<Ranking[]>([]);

    useEffect(() => {
        async function load() {
            try {
                const responseRanking = await getRanking();
                let topThreePositions = responseRanking.slice(0, 3).sort((a, b) => a.position - b.position);
                topThreePositions = [topThreePositions[1], topThreePositions[0], topThreePositions[2]]

                const restRankingPositions = responseRanking.slice(3);

                setTopRanking(topThreePositions);
                setRanking(restRankingPositions);
            } catch (error) {
                
            }
        }

        load();
    }, []);

    return {
        ranking,
        topRanking,
    }
}
