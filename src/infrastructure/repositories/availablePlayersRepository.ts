
import { Player } from "@/src/domain/entities";

import { api } from "../api"

export const availablePlayersRepository = {
    async getAllAvailablePlayers() {
        try {            
            const response = await api.get<Player[]>('available-players');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
