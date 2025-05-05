import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

import { getTeam, updateTeam } from "@/src/application/services";
import { Player, Team } from "@/src/domain/entities"

type LoadTeamContextData = {
    players: Player[];
    team?: Team;
    onUpdateTeam(value: Team): Promise<void>;
}

export const LoadTeamContext = createContext({} as LoadTeamContextData);

type LoadTeamProviderProps = {
    children: React.ReactNode;
}

export function LoadTeamProvider({ children }: LoadTeamProviderProps) {
    const [players, setPlayers] = useState<Player[]>([]);
    const [team, setTeam] = useState<Team>();

    const onUpdateTeam = useCallback(async (teamUpdated: Team) => {
        setTeam(teamUpdated)
        await updateTeam(teamUpdated)
    }, []);

    useEffect(() => {
        async function loadTeams() {
            try {
                const responseTeam = await getTeam(1);
                setPlayers(responseTeam.players);
                setTeam(responseTeam);
            } catch (error) {
                
            }
        }
    
        loadTeams();
    }, []);

    return ( 
        <LoadTeamContext.Provider 
            value={{
                players,
                team,
                onUpdateTeam,
            }}
        >
            {children}
        </LoadTeamContext.Provider>
    );
}

export const useLoadTeam = () => useContext(LoadTeamContext);
