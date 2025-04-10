import { GENRE } from "@/constants/genre";
import { FlatList } from "react-native-gesture-handler";
import Checkbox from "../ui/checkbox";

export default function Genre() {
  return (
    <FlatList
      data={GENRE}
      renderItem={({ item }) => <Checkbox label={item} />}
    />
  );
}
