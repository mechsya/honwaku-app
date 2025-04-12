import { Text, TouchableOpacity, View } from "react-native";
import Seperator from "../seperator";

const datas = [{}, {}, {}];

export default function Announcement() {
  return (
    <View className="p-4">
      <Seperator label="Pengumuman" button={true} />
      <>
        {datas.map((_, index) => (
          <ItemAnouncement key={index} />
        ))}
      </>
    </View>
  );
}

function ItemAnouncement(props: any) {
  return (
    <TouchableOpacity className="py-3 border-b border-black/10">
      <Text className="font-serif text-lg text-black">
        Dibutuhkan developer react native
      </Text>
      <Text className="font-roboto text-black/50 text-sm">
        <Text className="text-red-400">Penting</Text> &bull; Diupload 28 Janury
        2025
      </Text>
    </TouchableOpacity>
  );
}
