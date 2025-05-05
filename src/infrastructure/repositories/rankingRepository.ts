import { Ranking } from "@/src/domain/entities/Ranking";

import { api } from "../api"

export const rankingRepository = {
    async getRanking() {
        try {            
            const response = await api.get<Ranking[]>('ranking-players');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
