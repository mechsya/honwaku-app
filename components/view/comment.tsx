import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "../icon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLOR } from "@/constants/color";

export default function Comment() {
  return (
    <>
      <FlatList data={["", ""]} renderItem={() => <CommentItem />} />
      <View className="bg-white flex-row border-t border-black/10 items-center absolute bottom-0 w-full px-4 py-3">
        <TextInput
          placeholder="Tulis Komentar"
          className="bg-gray-100 p-4 flex-1 rounded-lg"
        />
        <TouchableOpacity className="bg-blue-400 w-10 h-10 ml-4 justify-center items-center rounded-full">
          <Icon name={"arrow-upward"} size={20} color={COLOR.WHITE} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const CommentItem = () => {
  return (
    <View className="p-4 border-b border-black/10">
      <TouchableOpacity className="">
        <Text className="text-black font-robotoMedium">Miko Meysa Bima</Text>
        <Text className="text-black/50 font-roboto my-1">20 April 2025</Text>
        <Text className="text-black font-roboto leading-7 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nisi
          temporibus consectetur animi fuga, impedit nulla vitae ea
          reprehenderit soluta.
        </Text>
      </TouchableOpacity>

      <View className="flex-row justify-between">
        <TouchableOpacity className="flex-row items-center gap-2">
          <AntDesign name="like2" size={16} color="black" />
          <Text className="font-roboto">20</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name={"more-vert"} size={16} color={COLOR.BLACK} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
