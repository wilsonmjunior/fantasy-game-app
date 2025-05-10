import { FootballMatch } from "@/src/domain/entities";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/src/constants/Colors";

const width = Dimensions.get('screen').width/1.4;

type FeaturedFootballTeamProps = {
    item: FootballMatch;
}

export function FeaturedFootballTeam({ item }: FeaturedFootballTeamProps) {
    const renderScorers = (teamName: string) => {
        return item.scorers
            .filter(scorer => scorer.team === teamName)
            .map((scorer, index) => (
                <Text key={index} style={styles.scorerText}>
                    {scorer.player} {scorer.minute}'
                </Text>
            ));
    };

    return (
        <View style={styles.container}>
            <View style={styles.gradientOverlay} />
            
            <View style={styles.content}>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{item.status.minute}:{item.status.additionalTime || '00'}</Text>
                </View>
                
                <View style={styles.teamsContainer}>
                    <View style={styles.teamItem}>
                        <Image source={{ uri: item.homeTeam.logo }} style={styles.teamLogo} />
                    </View>
                    
                    <View style={styles.scoreContainer}>
                        <Text style={styles.scoreText}>{item.homeTeam.score} - {item.awayTeam.score}</Text>
                    </View>
                    
                    <View style={styles.teamItem}>
                        <Image source={{ uri: item.awayTeam.logo }} style={styles.teamLogo} />
                    </View>
                </View>
                
                <View style={styles.scorersContainer}>
                    <View style={styles.scorersList}>
                        {renderScorers(item.homeTeam.name)}
                    </View>
                    
                    <View style={{ width: 20 }} />
                    
                    <View style={styles.scorersList}>
                        {renderScorers(item.awayTeam.name)}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: Colors.primary[100],
        borderWidth: 1,
        borderColor: Colors.primary[600]
    },
    gradientOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderRightWidth: width,
        borderRightColor: Colors.neutral[500],
        opacity: 0.6,
    },
    content: {
        flex: 1,
        padding: 16,
        zIndex: 1,
    },
    timeContainer: {
        alignItems: 'center',
        marginBottom: 12,
    },
    timeText: {
        color: Colors.white,
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
    },
    teamsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    teamItem: {
        alignItems: 'center',
        width: 50,
    },
    teamLogo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    scoreContainer: {
        flex: 1,
        alignItems: 'center',
    },
    scoreText: {
        color: Colors.white,
        fontSize: 32,
        fontFamily: 'Poppins_700Bold',
    },
    scorersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scorersList: {
        flex: 1,
    },
    scorerText: {
        color: Colors.white,
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        marginBottom: 4,
    }
});
