import { availablePlayersRepository as repo } from "@/src/infrastructure/repositories";

export async function getAvailablePlayers() {
    const ranking = await repo.getAllAvailablePlayers();
    return ranking;
}
