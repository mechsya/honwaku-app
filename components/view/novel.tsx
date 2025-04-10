import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import Seperator from "../seperator";

export default function Novel() {
  return (
    <View className="px-4">
      <Seperator TextclassName="text-base" label="Novel Rekomendasi Lainya" />
      <FlatList
        data={["", "", "", "", "", ""]}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-2" />}
        renderItem={() => <CardNovel />}
        className="py-4"
      />
    </View>
  );
}

const CardNovel = () => {
  return (
    <TouchableOpacity className="w-[100px]">
      <Image
        className="border border-black"
        style={{ width: 100, height: 140 }}
        source={{
          uri: "https://images-cdn.ubuy.co.id/678dd84b095ace31782df0a5-mushoku-tensei-jobless-reincarnation.jpg",
        }}
      />
      <Text numberOfLines={2} className="mt-2 font-roboto">
        Mushoku Tensei : Jobless Reincarnation
      </Text>
    </TouchableOpacity>
  );
};
