import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "../icon";
import { COLOR } from "@/constants/color";

export default function Navbar() {
  return (
    <View className="navbar-container">
      <Image
        style={{ width: 32, height: 32 }}
        className="w-8 h-8"
        source={require("@/assets/images/logo-colored.png")}
      />
      <View className="flex-row gap-6 items-center">
        <TouchableOpacity>
          <Icon name={"search"} size={20} color={COLOR.BLACK} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
