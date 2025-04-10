import { Text, TouchableOpacity, View } from "react-native";
import Icon from "../icon";
import { COLOR } from "@/constants/color";
import { useAtomValue } from "jotai";
import { _chapterRef } from "@/hooks/read";

export default function NavigationBottom() {
  const chapterRef = useAtomValue(_chapterRef);

  return (
    <View className="w-full bg-white flex-row absolute bottom-0 border-y border-black/10">
      <TouchableOpacity
        onPress={() => chapterRef.current?.expand()}
        className="p-3 flex-1 flex-row gap-3 items-center"
      >
        <Icon name={"format-list-bulleted"} size={20} color={COLOR.BLACK} />
        <View>
          <Text numberOfLines={1} className="font-roboto text-black">
            Lorem ipsum, dolor sit amet consectetur
          </Text>
          <Text className=" font-roboto text-black/50 text-sm">
            Volume 1 &bull; Chapter 2
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="px-6 justify-center items-center border-l border-black/10">
        <Icon name={"arrow-right-alt"} size={20} color={COLOR.BLACK} />
      </TouchableOpacity>
    </View>
  );
}
