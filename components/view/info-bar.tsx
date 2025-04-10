import { Text, TouchableOpacity, View } from "react-native";
import Icon from "../icon";
import { COLOR } from "@/constants/color";

const InfoBar = () => (
  <View className="flex-row border-b border-black/10">
    <View className="flex-1 flex-row gap-2 py-4 justify-center items-center">
      <Icon name="star" size={16} color={COLOR.PRIMARY} />
      <Text className="text-black font-roboto">8.9</Text>
    </View>
    <View className="flex-1 flex-row gap-2 py-4 justify-center items-center border-x border-black/10">
      <Icon name="remove-red-eye" size={16} color={COLOR.IN_ACTIVE} />
      <Text className="text-black font-roboto">20.000</Text>
    </View>
    <TouchableOpacity className="flex-1 flex-row gap-2 py-4 justify-center items-center">
      <Icon name="bookmark-add" size={16} color={COLOR.IN_ACTIVE} />
      <Text className="text-black font-roboto">Simpan</Text>
    </TouchableOpacity>
  </View>
);
export default InfoBar;
