import Container from "@/components/container";
import Navbar from "@/components/explore/navbar";
import { COLOR } from "@/constants/color";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "@/components/icon";
import Seperator from "@/components/seperator";
import CardNovel from "@/components/ui/card-novel";
import Filter from "@/components/explore/filter";
import { atom, useAtom, useAtomValue } from "jotai";
import debounce from "lodash.debounce";
import { useCallback, useState } from "react";
import { get } from "@/utils/fetch";
import { INovel } from "@/types/INovel";

const _inputValue = atom("");

export default function ExploreScreen() {
  const [inputValue, setInputValue] = useAtom(_inputValue);
  const [novels, setNovel] = useState<INovel[]>([]);

  const handleSeacrh = useCallback(
    debounce((text: string) => {
      if (text.trim() === "") return;
      get({ url: `novel/search?q=${text}` }).then((res) => setNovel(res));
    }, 500),
    []
  );

  const onChange = (text: string): void => {
    setInputValue(text);
    handleSeacrh(inputValue);
  };

  return (
    <GestureHandlerRootView className="flex-1">
      <Container>
        <Navbar />
        <FlatList
          className="p-4"
          ListHeaderComponent={
            <>
              <Search onChange={onChange} />
              <Seperator label="Hasil Pencarian" />
            </>
          }
          data={novels}
          nestedScrollEnabled={true}
          renderItem={({ item }) => <CardNovel {...item} />}
        />
        <Filter />
      </Container>
    </GestureHandlerRootView>
  );
}

const Search = ({ onChange }: { onChange: (value: string) => void }) => {
  const inputValue = useAtomValue(_inputValue);
  return (
    <View className="flex-row bg-gray-100 my-2 rounded items-center">
      <TextInput
        placeholder="Cari novel"
        onChangeText={onChange}
        value={inputValue}
        placeholderClassName="font-roboto"
        className="flex-1 p-4 font-roboto text-lg"
      />
      <TouchableOpacity className="px-2">
        <Icon name="search" size={20} color={COLOR.BLACK} />
      </TouchableOpacity>
    </View>
  );
};
