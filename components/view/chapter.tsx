import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Chapter(chapters: any) {
  return (
    <BottomSheetFlatList
      data={chapters.chapters}
      renderItem={(item: any) => <ChapterItem {...item} />}
    />
  );
}

function ChapterItem(item: any) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({ pathname: "/read", params: { slug: item.item.slug } })
      }
      className="px-4 items-center flex-row py-3 border-b border-black/10"
    >
      <View className="flex-1">
        <Text className="font-roboto text-black" numberOfLines={1}>
          {item.item.title}
        </Text>
        <Text className="font-roboto text-black/50 mt-1 text-sm">
          Volume {item.item.volume} &bull; Chapter {item.item.chapter} &bull;{" "}
          {item.item.updated_at}
        </Text>
      </View>
      <Text className="bg-red-400 px-2 font-roboto text-white text-sm py-1 rounded-full">
        New
      </Text>
    </TouchableOpacity>
  );
}
