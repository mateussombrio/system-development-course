// Reproduce a layout similar to Spotify's music player for a song you like.

import { View, Image, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  const capa =
    "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Weeknd_-_After_Hours.png";
  const icons_next =
    "https://cdn3.iconfinder.com/data/icons/basic-user-interface-5/64/play_start_music_multimedia_media_player_go_forward_next-256.png";
  const icon_play =
    "https://cdn3.iconfinder.com/data/icons/basic-user-interface-5/64/pause_player_video_multimedia_films-512.png";
  const icon_previous =
    "https://cdn3.iconfinder.com/data/icons/basic-user-interface-5/64/play_start_music_multimedia_media_player_go_forward_back-256.png";
  return (
    <View style={estilo.container}>
      <Image style={estilo.logo} source={{ uri: capa }} />
      <View style={estilo.div_nome_dot}>
        <View style={estilo.texto}>
          <Text style={estilo.music}>Repeat After Me</Text>
          <Text style={estilo.artist}>The Weeknd</Text>
        </View>
        <View style={estilo.div_dot}>
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            size={24}
            color="black"
          />
        </View>
      </View>
      <View style={estilo.div_barra}>
        <View style={estilo.barra1} />
        <View style={estilo.barra2} />
      </View>
      <View style={estilo.div_tempo}>
        <Text style={estilo.tempo}> -0:00 </Text>
        <Text style={estilo.tempo}> 3:15 </Text>
      </View>
      <View style={estilo.div_icons}>
        <AntDesign name="left" size={30} color="black" />
        <Ionicons name="pause-outline" size={30} color="black" />
        <AntDesign name="right" size={30} color="black" />
      </View>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFAFA",
  },

  logo: {
    width: "73%",
    height: 300,
    margin: 30,
    borderRadius: 10,
  },
  texto: {
    fontFamily: "Arial",
    flexDirection: "column",
    flex: 1,
  },
  music: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: "2%",
  },
  artist: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: "3%",
  },
  barra1: {
    flex: 0.6,
    height: 8,
    backgroundColor: "#353839",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  barra2: {
    flex: 0.4,
    backgroundColor: "#D3D3D3",
    height: 8,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  div_barra: {
    marginTop: "2%",
    flexDirection: "row",
    width: "72%",
  },
  div_tempo: {
    flexDirection: "row",
    marginTop: "2%",
    justifyContent: "space-between",
    width: "72%",
  },
  tempo: {
    fontSize: 10,
  },

  div_icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 0.5,
    width: "72%",
    marginTop: "5%",
  },
  div_dot: {
    flexDirection: "row",
    flex: 0.1,
    alignSelf: "center",
    justifyContent: "center",
  },
  div_nome_dot: {
    flexDirection: "row",
    width: "72%",
  },
});
