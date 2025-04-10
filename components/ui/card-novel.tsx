import { Image, Text, TouchableOpacity, View } from "react-native";
import { cn } from "../cn";
import { INovel } from "@/types/INovel";
import { useRouter } from "expo-router";

export default function CardNovel(props: INovel) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.navigate("/view")}
      className="flex-row justify-between py-4 gap-4 border-b border-black/10"
    >
      <View className="flex-1">
        <Text className="font-serif text-lg text-black">{props.title}</Text>
        <Text
          className="font-roboto py-2 text-black/80 text-sm line-clamp-4"
          numberOfLines={4}
        >
          {props.sinopsis}
        </Text>
        <Text className="font-roboto capitalize text-black/60 text-sm">
          <Text
            className={cn(
              "capitalize",
              props.status === "end"
                ? "text-red-500"
                : props.status === "ongoing"
                ? "text-green-500"
                : "text-blue-500"
            )}
          >
            {props.status}
          </Text>{" "}
          &bull; {props.genres} &bull; {props.ranting} &bull; 160 Chapter &bull;{" "}
          {props.view} kali dibaca &bull; Update terakhir {props.updated_at}
        </Text>
      </View>
      <Image
        className="w-24 h-36 border border-black"
        source={{ uri: props.cover_url }}
      />
    </TouchableOpacity>
  );
}
