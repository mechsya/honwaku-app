import { Text, TouchableOpacity, View } from "react-native";
import Seperator from "../seperator";
import { UPDATES } from "@/constants/update";

export default function Update() {
  return (
    <View className="p-4">
      <Seperator label="Bab Terbaru telah rilis!!" button={true} />
      <View>
        {UPDATES.map((item, index) => (
          <ItemUpdate {...item} key={index} />
        ))}
      </View>
    </View>
  );
}

function ItemUpdate(props: any) {
  return (
    <TouchableOpacity className="py-3 border-b border-black/10">
      <Text className="font-serif text-lg text-black">{props.title}</Text>
      <Text className="font-robotoSemibold text-black py-1 text-md">
        {props.series}
      </Text>
      <Text className="font-roboto text-black/60 text-sm">
        <Text className="text-red-400">Baru</Text> &bull; {props.genre} &bull;{" "}
        {props.character_count} Karakter &bull; Diupload {props.created_at}
      </Text>
    </TouchableOpacity>
  );
}
