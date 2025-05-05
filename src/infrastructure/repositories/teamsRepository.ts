import { Team } from "@/src/domain/entities";
import { TeamUpdateParams } from "@/src/domain/dtos";

import { api } from "../api";

export const teamsRepository = {
    async getAllTeams() {
        try {
            const response = await api.get<Team>('teams');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async getTeamById(id: number) {
        try {
            const response = await api.get<Team>(`teams/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async update(data: TeamUpdateParams) {
        try {
            const teamId = data.id;
            const response = await api.put<Team>(`teams/${teamId}`, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
