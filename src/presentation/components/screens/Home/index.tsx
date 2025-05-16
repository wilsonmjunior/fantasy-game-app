import { ScrollView, StyleSheet } from "react-native";

import { Colors } from "@/src/constants/Colors";
import { useFootballMatches } from "@/src/presentation/hooks";
import { getStatusBarHeight } from "@/src/status-bar";
import { Header, FeaturedFootballTeams } from "./components";
import { HomeSkeleton } from "./HomeSkeleton";

export function Home() {
    const { liveMatches, isLoading } = useFootballMatches();
  
    if (isLoading) {
      return <HomeSkeleton />;
    }

    return (
      <ScrollView style={styles.container}>
        <Header />
  
        <FeaturedFootballTeams liveMatches={liveMatches} />
      </ScrollView>
    );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: getStatusBarHeight + 24, 
    paddingHorizontal: 20,
  },
});
  