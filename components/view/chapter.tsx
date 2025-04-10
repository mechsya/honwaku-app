import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Chapter() {
  return (
    <BottomSheetFlatList
      data={[
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ]}
      renderItem={(item: any) => <ChapterItem />}
    />
  );
}

function ChapterItem() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.navigate("/read")}
      className="px-4 items-center flex-row py-3 border-b border-black/10"
    >
      <View className="flex-1">
        <Text className="font-roboto text-black" numberOfLines={1}>
          Heelo World
        </Text>
        <Text className="font-roboto text-black/50 mt-1">
          Volume 1 &bull; Chapter 20 &bull; 28 January 2025
        </Text>
      </View>
      <Text className="bg-red-400 px-2 font-roboto text-white text-sm py-1 rounded-full">
        New
      </Text>
    </TouchableOpacity>
  );
}
