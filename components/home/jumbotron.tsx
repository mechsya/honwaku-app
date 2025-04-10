import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { cn } from "../cn";

const { width } = Dimensions.get("window");

const news = [
  {
    cover:
      "https://kakuyomu.jp/_next/image?url=https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2Fk%2Fkadokawa-toko%2F20250327%2F20250327173947.jpg&w=1920&q=75",
    id: "",
  },
  {
    cover:
      "https://kakuyomu.jp/_next/image?url=https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2Fk%2Fkadokawa-toko%2F20250327%2F20250327173943.jpg&w=1920&q=75",
    id: "",
  },
  {
    cover:
      "https://kakuyomu.jp/_next/image?url=https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2Fk%2Fkadokawa-toko%2F20250328%2F20250328123227.jpg&w=1920&q=75",
    id: "",
  },
  {
    cover:
      "https://kakuyomu.jp/_next/image?url=https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2Fk%2Fkadokawa-toko%2F20250327%2F20250327173952.jpg&w=1920&q=75",
    id: "",
  },
];

interface IJumbotroItem {
  cover?: string;
  id?: string;
}

export default function Jumbotron() {
  const flatListRef = useRef<FlatList<IJumbotroItem>>(null);
  const [indexNow, setIndexNow] = useState(0);

  const scrollToIndex = (index: any) => {
    setIndexNow(index);
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  return (
    <>
      <FlatList
        ref={flatListRef}
        className="w-full"
        data={news}
        horizontal
        pagingEnabled
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <ItemJumbotron cover={item.cover} id={item.id} />
        )}
      />
      <View className="px-4">
        <FlatList
          data={news}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View className="w-2"></View>}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              className={cn(
                index == indexNow
                  ? "border-2 border-black"
                  : "border-2 border-transparent"
              )}
              onPress={() => scrollToIndex(index)}
            >
              <Image
                source={{ uri: item.cover, width: 80, height: 40 }}
                height={40}
                width={80}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

function ItemJumbotron(props: IJumbotroItem) {
  return (
    <Image
      style={{ width }}
      source={{
        uri: props.cover,
      }}
      className="h-52 mb-2 bg-cover bg-gray-200"
    />
  );
}
