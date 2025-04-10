import { FlatList } from "react-native-gesture-handler";
import Checkbox from "../ui/checkbox";

export default function Status() {
  return (
    <FlatList
      data={["new release", "ongoing", "end"]}
      renderItem={({ item }) => <Checkbox label={item} />}
    />
  );
}
