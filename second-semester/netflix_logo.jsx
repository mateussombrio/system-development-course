// Exercise: Reproduce the Netflix App layout


import { View, Image, StyleSheet } from "react-native";

export default function App() {
  const logoNetflix =
    "https://loodibee.com/wp-content/uploads/Netflix-logo.png";
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: logoNetflix }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 300,
    height: 300,
  },
});
