import { Text, View } from "react-native";
import { cn } from "../cn";
// import { colorStatus } from "@/app/view";

const Tag = ({
  items,
  status,
}: {
  items: string[];
  status: string | undefined;
}) => (
  <View className="flex-row gap-2 ">
    {items.map((item, index) => (
      <Text
        key={index}
        className={cn("capitalize font-roboto rounded text-black/50")}
      >
        {item}
      </Text>
    ))}
  </View>
);

export default Tag;
