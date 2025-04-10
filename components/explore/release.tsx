import { FlatList } from "react-native-gesture-handler";
import Checkbox from "../ui/checkbox";

export default function Release() {
  return (
    <FlatList
      data={["2020", "2021", "2022", "2023", "2024", "2025"]}
      renderItem={({ item }) => <Checkbox label={item} />}
    />
  );
}
