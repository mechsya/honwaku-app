import { Text, View } from "react-native";
import { cn } from "../cn";

const Tag = ({ items }: { items: string[] }) => (
  <View className="flex-row gap-2 ">
    {items.map((item, index) => (
      <Text
        key={index}
        className={cn(
          "self-start px-2 font-robotoMedium text-sm text-white rounded",
          index % 2 ? "bg-blue-400" : "bg-purple-400"
        )}
      >
        {item}
      </Text>
    ))}
  </View>
);

export default Tag;
