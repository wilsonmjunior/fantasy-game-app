import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Colors } from "@/src/constants/Colors";
import { getStatusBarHeight } from "@/src/status-bar";
import { SkeletonText } from "../../skeleton";

const width = Dimensions.get('window').width;

export function HomeSkeleton() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <SkeletonText width={width-40} height={32} />
      </View>

      <SkeletonText width={160} height={20} />

      <View style={styles.featuredContainer}>
        <SkeletonText width={width/1.4} height={220} />
        <SkeletonText width={width/1.4} height={220} />
      </View>
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
  header: {
    marginBottom: 24,
  },
  featuredContainer: {
    marginTop: 24,
    flexDirection: "row",
    gap: 16,
  },
});
