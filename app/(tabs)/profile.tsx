import Container from "@/components/container";
import Icon from "@/components/icon";
import { COLOR } from "@/constants/color";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";

export default function Page() {
  return (
    <Container>
      <Navbar />
      <View>
        <View className="flex-row gap-4 px-4 py-4 border-b border-black/10">
          <Image
            className="rounded-full"
            width={60}
            height={60}
            style={{ width: 60, height: 60 }}
            source={{
              uri: "https://i.pinimg.com/736x/bc/20/94/bc20948f3bccfd926b41688b38b3d9c9.jpg",
            }}
          />
          <View className="w-full">
            <Text className="font-robotoSemibold text-black">
              Miko Meysa Bima
            </Text>
            <Text className="font-roboto text-black/70">
              alinia.meysa@gmail.com
            </Text>
            <View className="flex-row items-center gap-2">
              <TouchableOpacity
                style={{ alignSelf: "flex-start" }}
                className="bg-red-500 px-2 mt-2 py-1 rounded"
              >
                <Text className="text-white text-sm font-robotoMedium">
                  Free
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <FlatList
          data={[
            "Edit Profile",
            "Global Chat",
            "Upgrade to Premium",
            "Follow us",
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity className="py-3 px-4 border-b border-black/10">
              <Text className="font-roboto text-black text-md">{item}</Text>
            </TouchableOpacity>
          )}
        />
        <Text className="text-center font-roboto text-black/70 p-4">
          App Version V1.0.0
        </Text>
      </View>
    </Container>
  );
}

function Navbar() {
  return (
    <View className="w-full flex-row h-16 px-4 items-center justify-between border-b-[0.5px] border-black/10">
      <Text className="flex flex-1 text-xl  font-roboto">Profile</Text>
      <TouchableOpacity>
        <Icon name={"settings"} size={20} color={COLOR.IN_ACTIVE} />
      </TouchableOpacity>
    </View>
  );
}
