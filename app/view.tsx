import Container from "@/components/container";
import { style } from "@/components/explore/filter";
import Seperator from "@/components/seperator";
import Chapter from "@/components/view/chapter";
import Comment from "@/components/view/comment";
import Description from "@/components/view/description";
import InfoBar from "@/components/view/info-bar";
import Navbar from "@/components/view/navbar";
import Novel from "@/components/view/novel";
import TabBar from "@/components/view/tab-bar";
import Tag from "@/components/view/tag";
import { _renderComponent } from "@/hooks/view";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ViewScreen() {
  const renderComponent = useAtomValue(_renderComponent);

  return (
    <GestureHandlerRootView>
      <Container>
        <Navbar />
        <ScrollView>
          <View className="w-full h-5 bg-blue-400" />
          <View className="p-4 flex-row border-b border-black/10">
            <View className="flex-1">
              <Text className="font-serif text-lg text-black">
                Mushoku Tensei: Isekai Ittara Honki Dasu
              </Text>
              <Text className="text-black/70 my-2 font-roboto">
                Author : Miko Meysa
              </Text>
              <Tag items={["Fantasy", "Romance", "Comedy", "SOL"]} />
            </View>
            <Image
              style={{ width: 85, height: 120 }}
              className="border border-black"
              source={{
                uri: "https://images-cdn.ubuy.co.id/678dd84b095ace31782df0a5-mushoku-tensei-jobless-reincarnation.jpg",
              }}
            />
          </View>
          <InfoBar />
          <Description />
          <Novel />
        </ScrollView>
      </Container>
      <BottomSheet
        snapPoints={useMemo(() => ["10%", "100%"], [])}
        style={style.bottomSheetContainer}
      >
        <TabBar />
        {renderComponent === "chapter" ? <Chapter /> : null}
        {renderComponent === "komentar" ? <Comment /> : null}
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
