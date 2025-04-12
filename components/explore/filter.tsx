import { StyleSheet, Text, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef, useState } from "react";
import { _filterRef } from "@/hooks/explore";
import { useSetAtom } from "jotai";
import { cn } from "../cn";
import Genre from "./genre";
import Release from "./release";
import Status from "./status";

export default function Filter() {
  const ref = useRef<BottomSheet>(null);
  const setFilterRef = useSetAtom(_filterRef);
  const [filterRender, setFilterRender] = useState("genre");

  useEffect(() => setFilterRef(ref), [setFilterRef]);

  return (
    <BottomSheet
      ref={ref}
      enablePanDownToClose
      index={-1}
      snapPoints={useMemo(() => ["50%", "75%"], [])}
      style={style.bottomSheetContainer}
    >
      <BottomSheetView className="flex-row items-center">
        {["genre", "release", "status"].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setFilterRender(item)}
            className={cn(
              "flex-1 px-4 justify-between py-3",
              filterRender === item
                ? "border-b-2 border-primary"
                : "border-b border-black/10"
            )}
          >
            <Text className="font-roboto capitalize">{item}</Text>
          </TouchableOpacity>
        ))}
      </BottomSheetView>
      {filterRender === "genre" ? <Genre /> : null}
      {filterRender === "release" ? <Release /> : null}
      {filterRender === "status" ? <Status /> : null}
    </BottomSheet>
  );
}

export const style = StyleSheet.create({
  bottomSheetContainer: {
    zIndex: 99,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,.1)",
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
});
