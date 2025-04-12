import { Image, Text, TouchableOpacity, View } from "react-native";
import { cn } from "../cn";
import { INovel } from "@/types/INovel";
import { useRouter } from "expo-router";

export default function CardNovel({
  title,
  slug,
  sinopsis,
  status,
  genres,
  ranting,
  view,
  updated_at,
  cover_url,
}: INovel) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/view",
      params: { slug: slug },
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "end":
        return "text-red-500";
      case "ongoing":
        return "text-green-500";
      default:
        return "text-blue-500";
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="flex-row justify-between py-4 gap-4 border-b border-black/10"
    >
      <View className="flex-1">
        <Text className="font-serif text-lg text-black">{title}</Text>

        <Text
          className="font-roboto py-2 text-black/70 line-clamp-4"
          numberOfLines={4}
        >
          {sinopsis}
        </Text>

        <Text className="font-roboto capitalize text-black/50 text-sm">
          <Text className={cn("capitalize", getStatusColor(status))}>
            {status}
          </Text>{" "}
          &bull; {genres} &bull; {ranting} &bull; 160 Chapter &bull; {view} kali
          dibaca &bull; Update terakhir {updated_at}
        </Text>
      </View>

      <Image
        className="w-24 h-36 border border-black"
        source={{ uri: cover_url }}
      />
    </TouchableOpacity>
  );
}
