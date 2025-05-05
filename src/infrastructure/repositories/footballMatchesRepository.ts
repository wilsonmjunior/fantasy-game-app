import { FootballMatch } from "@/src/domain/entities";
import { api } from "../api";

export const footballMatchesRepository = {
    async getLiveMatches() {
        try {
            const response = await api.get<FootballMatch[]>('live-matches');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};
