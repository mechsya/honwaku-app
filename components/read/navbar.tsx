import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import Icon from "../icon";
import { COLOR } from "@/constants/color";
import { useRouter } from "expo-router";
import { _settingRef } from "@/hooks/read";

export default function Navbar() {
  const router = useRouter();

  return (
    <View className="navbar-container">
      <TouchableOpacity
        onPress={() => router.back()}
        className="flex-row gap-4 items-center"
      >
        <Icon name="arrow-back" size={20} color={COLOR.BLACK} />
        <Text className="font-roboto" numberOfLines={1}>
          Mushoku Tensei : Jobless Reincarnation
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name={"more-vert"} size={20} color={COLOR.BLACK} />
      </TouchableOpacity>
    </View>
  );
}
