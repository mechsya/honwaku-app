import { cn } from "@/components/cn";
import Container from "@/components/container";
import { style } from "@/components/explore/filter";
import Loading from "@/components/loading";
import Chapter from "@/components/view/chapter";
import Comment from "@/components/view/comment";
import Description from "@/components/view/description";
import InfoBar from "@/components/view/info-bar";
import Navbar from "@/components/view/navbar";
import Novel from "@/components/view/novel";
import TabBar from "@/components/view/tab-bar";
import Tag from "@/components/view/tag";
import { _renderComponent } from "@/hooks/view";
import { INovel } from "@/types/INovel";
import { get } from "@/utils/fetch";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useLocalSearchParams } from "expo-router";
import { useAtomValue } from "jotai";
import { useEffect, useMemo, useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function colorStatus(status: string | undefined) {
  switch (status) {
    case "end":
      return "bg-red-400";
    case "ongoing":
      return "bg-green-500";
    default:
      return "bg-blue-400";
  }
}

export default function ViewScreen() {
  const renderComponent = useAtomValue(_renderComponent);
  const params = useLocalSearchParams();
  const [novel, setNovel] = useState<INovel>();
  const [loading, setLoading] = useState<boolean>(true);
  const snapPoints = useMemo(() => ["30%", "50%", "100%"], []);

  useEffect(() => {
    get({ url: "novel/" + params.slug })
      .then(setNovel)
      .catch(() => Alert.alert("error"))
      .finally(() => setLoading(!loading));
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <GestureHandlerRootView>
      <Container>
        <Navbar />
        <ScrollView>
          <View className={cn("w-full h-2", colorStatus(novel?.status))} />
          <View className="p-4 flex-row border-b gap-2 border-black/10">
            <View className="flex-1">
              <Text className="font-serif text-lg text-black">
                {novel?.title}
              </Text>
              <Text className="text-black/50 mb-2 font-roboto">
                Author : {novel?.author}
              </Text>
            </View>
            <Image
              style={{ width: 65, height: 90 }}
              className="border border-black"
              source={{
                uri: novel?.cover_url,
              }}
            />
          </View>
          <InfoBar
            ranting={novel?.ranting}
            view={novel?.view}
            slug={novel?.slug}
          />
          <Description description={novel?.sinopsis} />
          <Novel />
          <View className="w-full h-32"></View>
        </ScrollView>
      </Container>
      <BottomSheet snapPoints={snapPoints} style={style.bottomSheetContainer}>
        <TabBar />
        {renderComponent === "chapter" ? (
          <Chapter chapters={novel?.chapter} />
        ) : null}
        {renderComponent === "komentar" ? <Comment /> : null}
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
