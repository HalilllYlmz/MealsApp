import { StyleSheet, Text, View } from "react-native";

const MealsOverview = ({ route }) => {
  const { categoryId } = route.params;
  return (
    <View style={styles.container}>
      <Text>Meals Overwiew Screen</Text>
      <Text>Category ID: {categoryId}</Text>
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
