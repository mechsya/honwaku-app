import { Text, TouchableOpacity, View } from "react-native";
import Seperator from "../seperator";

export default function History() {
  return (
    <View className="px-4">
      <Seperator label="Riwayat Bacaan" button={true} />
      <View className="py-4">
        <TouchableOpacity className="border rounded-lg border-black/10 p-4">
          <Text className="font-serif text-lg text-black" numberOfLines={2}>
            Surviving in a Romance Fantasy Novel – Chapter 159: The Plague
            Demonic Spirit Part 4
          </Text>
          <Text className="font-robotoSemibold text-black py-1 text-md">
            Mushoku Tensei: Isekai Ittara Honki Dasu
          </Text>
          <Text className="text-base opacity-50 font-roboto">
            Dibaca 20 menit yang lalu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
