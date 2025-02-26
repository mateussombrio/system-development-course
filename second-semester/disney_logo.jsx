// Exercise: Reproduce the Disney+ App layout

import { View, Image, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const logoDisney =
    "https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-1.png";
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={["#050627", "#1f469a"]}
      >
        <Image
          style={[styles.logo, { width: width * 0.5, height: height * 0.5 }]}
          source={{ uri: logoDisney }}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  logo: {
    resizeMode: "contain",
  },
});
