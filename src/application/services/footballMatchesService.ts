import { footballMatchesRepository as repo } from "@/src/infrastructure/repositories";

export async function getFootballLiveMatches() {
    const response = await repo.getLiveMatches();
    return response;
} 
