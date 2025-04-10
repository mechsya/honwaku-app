import { SwipeListView } from "react-native-swipe-list-view";
import { NOVELS } from "@/constants/novel";
import CardNovel from "../ui/card-novel";
import { TouchableOpacity, View } from "react-native";
import Icon from "../icon";

export default function Bookmark() {
  const renderHiddenItem = () => (
    <View className="flex-1 justify-end flex-row items-center px-[18px]">
      <TouchableOpacity>
        <Icon name={"delete"} size={24} color={"#f87171"} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SwipeListView
      className="px-4"
      showsVerticalScrollIndicator={false}
      data={NOVELS}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-75}
      renderItem={({ item }) => (
        <View className="bg-white">
          <CardNovel {...item} />
        </View>
      )}
    />
  );
}
