import { TeamUpdateParams } from '@/src/domain/dtos';
import { teamsRepository as repo } from '@/src/infrastructure/repositories';

export async function getTeams() {
    const response = await repo.getAllTeams();
    return response;
}

export async function getTeam(id: number) {
    const response = await repo.getTeamById(id);
    return response;
}

export async function updateTeam(data: TeamUpdateParams) {
    const response = await repo.update(data);
    return response;
}