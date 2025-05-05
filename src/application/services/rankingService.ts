import { rankingRepository as repo } from "@/src/infrastructure/repositories";

export async function getRanking() {
    const ranking = await repo.getRanking();
    return ranking;
}
