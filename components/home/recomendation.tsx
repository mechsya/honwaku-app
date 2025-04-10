import { View } from "react-native";
import Seperator from "../seperator";
import CardNovel from "../ui/card-novel";
import { useEffect, useState } from "react";
import { get } from "@/utils/fetch";
import { INovel } from "@/types/INovel";

export default function Recomendation() {
  const [novels, setNovel] = useState<INovel[]>([]);

  useEffect(() => {
    get({ url: "novel/recomendation" }).then(setNovel).catch(console.error);
  }, []);

  return (
    <View className="p-4">
      <Seperator label={"Rekomendasi novel minggu ini"} />
      <>
        {novels.map((item, index) => (
          <CardNovel {...item} key={index} />
        ))}
      </>
    </View>
  );
}
