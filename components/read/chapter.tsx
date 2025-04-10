import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "../explore/filter";
import { useSetAtom } from "jotai";
import { _chapterRef } from "@/hooks/read";

export default function Chapter() {
  const ref = useRef(null);
  const setChapterRef = useSetAtom(_chapterRef);
  useEffect(() => setChapterRef(ref), [setChapterRef]);

  return (
    <BottomSheet
      style={style.bottomSheetContainer}
      index={-1}
      ref={ref}
      enablePanDownToClose={true}
      snapPoints={useMemo(() => ["50%", "100%"], [])}
    >
      <View></View>
      <BottomSheetFlatList
        className="mb-10"
        data={["", "", "", ""]}
        renderItem={() => <ChapterItem />}
      />
    </BottomSheet>
  );
}

function ChapterItem() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.navigate("/read")}
      className="px-4 items-center flex-row py-3 border-b border-black/10"
    >
      <View className="flex-1">
        <Text className="font-roboto text-black" numberOfLines={1}>
          Heelo World
        </Text>
        <Text className="font-roboto text-black/50 mt-1">
          Volume 1 &bull; Chapter 20 &bull; 28 January 2025
        </Text>
      </View>
    </TouchableOpacity>
  );
}
