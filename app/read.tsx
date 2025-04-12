import Markdown from "react-native-markdown-display";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RenderHTML } from "react-native-render-html";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useLocalSearchParams, useRouter } from "expo-router";
import { atom, useAtom } from "jotai";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Container from "@/components/container";
import Icon from "@/components/icon";
import { cn } from "@/components/cn";
import { COLOR } from "@/constants/color";
import { _fontFamily, _fontSize, _lineHeight } from "@/hooks/read";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { get } from "@/utils/fetch";
import { IChapter } from "@/types/INovel";

const snapPoints = ["25%", "50%", "75%"];
const { width } = Dimensions.get("window");

const _settingPaperRef = atom<BottomSheetMethods | null>(null);
const _chapterRef = atom<BottomSheetMethods | null>(null);

const chapters = [
  { title: "Misteri di balik bayangan", volume: "1", chapter: "1" },
  { title: "Rahasia malam kelam", volume: "1", chapter: "2" },
  { title: "Langkah pertama menuju takdir", volume: "1", chapter: "3" },
  { title: "Kehilangan yang menyakitkan", volume: "1", chapter: "4" },
  { title: "Dendam yang membara", volume: "1", chapter: "5" },
  { title: "Janji di bawah cahaya bulan", volume: "1", chapter: "6" },
  { title: "Harapan di ujung senja", volume: "1", chapter: "7" },
  { title: "Pertarungan tanpa akhir", volume: "1", chapter: "8" },
  { title: "Perjalanan menuju kegelapan", volume: "1", chapter: "9" },
  { title: "Terjebak dalam kebohongan", volume: "1", chapter: "10" },
  { title: "Kebenaran yang menyakitkan", volume: "1", chapter: "11" },
  { title: "Pertemuan dengan masa lalu", volume: "1", chapter: "12" },
  { title: "Tetesan air mata terakhir", volume: "1", chapter: "13" },
  { title: "Kebangkitan sang legenda", volume: "1", chapter: "14" },
  { title: "Akhir dari perjalanan panjang", volume: "1", chapter: "15" },
];

export default function ReadScreen() {
  const [fontSize] = useAtom(_fontSize);
  const [fontStyle] = useAtom(_fontFamily);
  const [lineHeight] = useAtom(_lineHeight);
  const params = useLocalSearchParams();
  const [chapter, setChapter] = useState<IChapter | undefined>(undefined);

  useEffect(() => {
    get({
      url: "chapter/" + params.slug,
    })
      .then(setChapter)
      .then((chapter) => console.log(chapter))
      .catch((error) => Alert.alert(error))
      .finally();
  }, []);

  return (
    <GestureHandlerRootView>
      <Container>
        <Navbar />
        <ScrollView className="p-4">
          <Markdown>{chapter?.content}</Markdown>
          {/* <RenderHTML
            contentWidth={width}
            tagsStyles={{
              p: {
                fontFamily: fontStyle,
                fontSize,
                lineHeight,
              },
            }}
            source={{ html: chapter?.content }}
            systemFonts={["PTSerif", "Roboto"]}
            enableExperimentalMarginCollapsing
          /> */}
        </ScrollView>
        <SettingPaperSheet />
        <ChapterSheet />
        <NavigationBottom />
      </Container>
    </GestureHandlerRootView>
  );
}

function Navbar() {
  const [settingRef] = useAtom(_settingPaperRef);
  const router = useRouter();

  return (
    <View className="w-full flex-row h-16 px-4 border-b border-black/10 items-center justify-between">
      <TouchableOpacity onPress={() => router.back()}>
        <Icon name="arrow-back" size={22} color={COLOR.BLACK} />
      </TouchableOpacity>
      <View className="flex-row items-center gap-6">
        <TouchableOpacity onPress={() => settingRef?.expand()}>
          <Icon name="settings" size={22} color={COLOR.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="share" size={22} color={COLOR.BLACK} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function NavigationBottom() {
  const [chapterRef] = useAtom(_chapterRef);

  return (
    <View className="h-14 flex-row border-y border-black/10 bg-white">
      <TouchableOpacity
        onPress={() => chapterRef?.expand()}
        className="flex-1 flex-row items-center gap-4 px-4 py-4 border-r border-black/10"
      >
        <Icon name="list" size={22} color={COLOR.BLACK} />
        <View>
          <Text className="font-roboto text-base">Manusia yang abadi</Text>
          <Text className="text-base text-black/50 font-roboto">
            Chapter 16 &middot; Volume 3
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="px-4 justify-center items-center">
        <Icon name="arrow-forward" size={22} color={COLOR.BLACK} />
      </TouchableOpacity>
    </View>
  );
}

function ChapterSheet() {
  const ref = useRef<BottomSheet>(null);
  const [, setChapterRef] = useAtom(_chapterRef);

  useEffect(() => {
    setChapterRef(ref.current);
  }, [setChapterRef]);

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      enablePanDownToClose
      snapPoints={useMemo(() => ["50%", "75%", "90%"], [])}
      backgroundStyle={{ backgroundColor: "white" }}
      style={{
        zIndex: 99,
        borderWidth: 0.5,
        borderColor: "rgba(0,0,0,.1)",
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
      }}
    >
      <View className="py-3 px-4 border-b border-black/10 flex-row justify-end">
        <TouchableOpacity>
          <FontAwesome name="sort" size={20} color={COLOR.BLACK} />
        </TouchableOpacity>
      </View>
      <BottomSheetFlatList
        data={chapters}
        keyExtractor={(item) => item.chapter}
        renderItem={({ item }) => (
          <TouchableOpacity className="border-b border-black/10 px-4 py-2">
            <Text className="font-roboto text-black text-base">
              {item.title}
            </Text>
            <Text className="font-roboto text-black/50 text-base">
              Chapter {item.chapter} &middot; Volume {item.volume}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View className="h-14" />
    </BottomSheet>
  );
}

function SettingPaperSheet() {
  const ref = useRef<BottomSheet>(null);
  const [, setRef] = useAtom(_settingPaperRef);
  const [fontSize, setFontSize] = useAtom(_fontSize);
  const [lineHeight, setLineHeight] = useAtom(_lineHeight);
  const [fontStyle, setFontStyle] = useAtom(_fontFamily);

  useEffect(() => {
    setRef(ref.current);
  }, [setRef]);

  const updateValue = (
    value: number,
    setter: (v: number) => void,
    min: number,
    max: number
  ) => {
    if (value > min && value < max) {
      setter(value);
    }
  };

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      enablePanDownToClose
      snapPoints={useMemo(() => snapPoints, [])}
      backgroundStyle={{ backgroundColor: "white" }}
      style={{
        zIndex: 99,
        borderWidth: 0.5,
        borderColor: "rgba(0,0,0,.1)",
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
      }}
    >
      <BottomSheetView className="p-4">
        <SettingControl
          label="Font Size"
          value={fontSize}
          onIncrease={() => updateValue(fontSize + 4, setFontSize, 8, 32)}
          onDecrease={() => updateValue(fontSize - 4, setFontSize, 12, 40)}
        />
        <SettingControl
          label="Line Height"
          value={lineHeight}
          onIncrease={() => updateValue(lineHeight + 4, setLineHeight, 8, 40)}
          onDecrease={() => updateValue(lineHeight - 4, setLineHeight, 12, 40)}
        />
        <View>
          <Text className="font-roboto text-black mb-2">Font Family</Text>
          <View className="flex-row mb-4 rounded overflow-hidden gap-2">
            {["Roboto", "PTSerif"].map((font) => (
              <TouchableOpacity
                key={font}
                onPress={() => setFontStyle(font)}
                className={cn(
                  "flex-1 py-2 border rounded",
                  fontStyle === font ? "border-primary" : "border-black/10"
                )}
              >
                <Text
                  className={cn(
                    "text-center text-lg",
                    font === "PTSerif" ? "font-serif" : "font-roboto",
                    fontStyle === font ? "text-primary" : "text-black"
                  )}
                >
                  {font}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

function SettingControl({
  label,
  value,
  onIncrease,
  onDecrease,
}: {
  label: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  return (
    <View className="mb-4">
      <Text className="font-roboto text-black mb-2">{label}</Text>
      <View className="flex-row rounded overflow-hidden border border-black/10">
        <TouchableOpacity onPress={onDecrease} className="flex-1 py-2">
          <Text className="text-center text-lg font-robotoSemibold">-</Text>
        </TouchableOpacity>
        <View className="flex-1 border-x border-black/10 justify-center items-center">
          <Text className="text-center text-lg font-roboto text-black">
            {value}
          </Text>
        </View>
        <TouchableOpacity onPress={onIncrease} className="flex-1 py-2">
          <Text className="text-center text-lg font-robotoSemibold">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
