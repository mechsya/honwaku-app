import { Text, TouchableOpacity, View } from "react-native";
import Icon from "../icon";
import { COLOR } from "@/constants/color";
import { INovel } from "@/types/INovel";

const InfoBar = (props: {
  ranting: number | undefined;
  view: number | undefined;
  slug: string | undefined;
}) => (
  <View className="flex-row border-b border-black/10">
    <View className="flex-1 flex-row gap-2 py-3 justify-center items-center">
      <Icon name="star" size={16} color={COLOR.PRIMARY} />
      <Text className="text-black font-roboto">{props.ranting}</Text>
    </View>
    <View className="flex-1 flex-row gap-2 py-3 justify-center items-center border-x border-black/10">
      <Icon name="remove-red-eye" size={16} color={COLOR.IN_ACTIVE} />
      <Text className="text-black font-roboto">{props.view}</Text>
    </View>
    <TouchableOpacity className="flex-1 flex-row gap-2 py-3 justify-center items-center">
      <Icon name="bookmark-add" size={16} color={COLOR.IN_ACTIVE} />
      <Text className="text-black font-roboto">Fantasy</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex-1 flex-row gap-2 py-3 justify-center border-l border-black/10 items-center">
      <Icon name="bookmark-add" size={16} color={COLOR.IN_ACTIVE} />
      <Text className="text-black font-roboto">Simpan</Text>
    </TouchableOpacity>
  </View>
);
export default InfoBar;
