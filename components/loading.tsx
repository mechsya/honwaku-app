import { Image, View } from "react-native";

export default function Loading() {
  return (
    <View className="w-full h-80 bg-white flex-1 justify-center items-center">
      <Image
        style={{ width: 50, height: 50 }}
        className="animate-spin"
        source={require("@/assets/images/loading.gif")}
      />
    </View>
  );
}
