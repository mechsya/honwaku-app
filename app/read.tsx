import Container from "@/components/container";
import Navbar from "@/components/read/navbar";
import NavigationBottom from "@/components/read/navigation-bottom";
import { htmlContent } from "@/constants/content";
import { _fontFamily, _fontSize, _lineHeight } from "@/hooks/read";
import { useAtomValue } from "jotai";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import RenderHTML from "react-native-render-html";
import Chapter from "@/components/read/chapter";

export default function ReadScreen() {
  const fontFamily = useAtomValue(_fontFamily);
  const lineHeight = useAtomValue(_lineHeight);
  const fontSize = useAtomValue(_fontSize);

  return (
    <GestureHandlerRootView>
      <Container>
        <Navbar />
        <ScrollView className="p-4">
          <RenderHTML
            tagsStyles={{
              p: { fontSize, fontFamily, lineHeight },
            }}
            systemFonts={["PTSerif", "Roboto"]}
            source={{ html: htmlContent }}
          />
        </ScrollView>
        <Chapter />
        <NavigationBottom />
      </Container>
    </GestureHandlerRootView>
  );
}
