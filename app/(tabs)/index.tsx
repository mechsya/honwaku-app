import Container from "@/components/container";
import Announcement from "@/components/home/announcement";
import History from "@/components/home/history";
import Jumbotron from "@/components/home/jumbotron";
import Navbar from "@/components/home/navbar";
import Recomendation from "@/components/home/recomendation";
import Update from "@/components/home/update";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <Container>
      <Navbar />
      <ScrollView>
        <Jumbotron />
        <Update />
        <History />
        <Recomendation />
        <Announcement />
      </ScrollView>
    </Container>
  );
}
