import { FlatList, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(item) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderCategoryItem(item)}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
