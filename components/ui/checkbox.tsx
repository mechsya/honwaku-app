import { Text, TouchableOpacity } from "react-native";
import Icon from "../icon";
import { COLOR } from "@/constants/color";
import { useState } from "react";

interface ICheckbox {
  label: string;
}

export default function Checkbox(props: ICheckbox) {
  const [isActive, setActive] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => setActive(!isActive)}
      className="flex-row w-full items-center gap-2 py-2 px-4 border-b border-black/10"
    >
      <Icon
        name={isActive ? "check-box" : "check-box-outline-blank"}
        size={16}
        color={isActive ? COLOR.PRIMARY : COLOR.IN_ACTIVE}
      />
      <Text className="font-roboto capitalize">{props.label}</Text>
    </TouchableOpacity>
  );
}
