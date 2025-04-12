import { Alert, View } from "react-native";
import Seperator from "../seperator";
import CardNovel from "../ui/card-novel";
import { useEffect, useState } from "react";
import { get } from "@/utils/fetch";
import { INovel } from "@/types/INovel";
import Loading from "../loading";

export default function Recomendation() {
  const [novels, setNovel] = useState<INovel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    get({ url: "novel/recomendation" })
      .then(setNovel)
      .catch((error) => Alert.alert(error))
      .finally(() => setLoading(!loading));
  }, []);

  return (
    <View className="p-4">
      <Seperator label={"Rekomendasi novel minggu ini"} />
      {loading ? (
        <Loading />
      ) : (
        <>
          {novels.map((item, index) => (
            <CardNovel {...item} key={index} />
          ))}
        </>
      )}
    </View>
  );
}
