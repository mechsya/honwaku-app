import { TouchableOpacity, Text } from "react-native";
import { UPDATES } from "@/constants/update";
import { FlatList } from "react-native";

export default function History() {
  return (
    <FlatList
      className="px-4"
      data={UPDATES}
      renderItem={({ item }) => <ItemHistory {...item} />}
    />
  );
}

function ItemHistory(props: any) {
  return (
    <TouchableOpacity className="py-3 border-b border-black/10">
      <Text className="font-serif text-lg text-black">{props.title}</Text>
      <Text className="font-robotoSemibold text-black py-1 text-md">
        {props.series}
      </Text>
      <Text className="font-roboto text-black/60 text-sm">
        {props.genre} &bull; {props.character_count} Karakter &bull; Dibaca{" "}
        {props.created_at}
      </Text>
    </TouchableOpacity>
  );
}
