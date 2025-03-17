import { View, Text, TextInput, StyleSheet, Image, Button } from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  const santander_logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/2560px-Banco_Santander_Logotipo.svg.png";

  const [valor, setValor] = useState();

  const [saldo, setSaldo] = useState(7320.92);

  const sacar = () => {
    const novoValor = parseFloat(valor);
    if (!isNaN(novoValor)) {
      setSaldo(saldo - novoValor);
    }
  };

  const depositar = () => {
    const novoValor = parseFloat(valor);
    if (!isNaN(novoValor)) {
      setSaldo(saldo + novoValor);
    }
  };

  return (
    // Div Container
    <View style={estilo.container}>
      // Div Logo
      <View>
        <Image style={estilo.logo_banco} source={{ uri: santander_logo }} />
      </View>
      <Text style={estilo.h2}> SALDO ATUAL NA CONTA </Text>
      // Div Saldo
      <View style={estilo.div_saldo}>
        <Text style={estilo.h1}>R$</Text>
        <Text style={estilo.h1}>{saldo.toString().replace(".", ",")}</Text>
      </View>
      // Div Texto
      <View style={estilo.div_texto}>
        <Text style={estilo.p}>
          Digite o valor abaixo e escolha uma das operações bancárias:
        </Text>
      </View>
      // Div Input
      <View style={estilo.div_input_icone}>
        <View style={estilo.div_icone}>
          <FontAwesome name="money" size={24} color="black" />
        </View>
        <View style={estilo.div_input}>
          <TextInput
            style={estilo.input}
            placeholder="0,00"
            placeholderTextColor="black"
            onChangeText={(novoValor) => setValor(novoValor)}
          />
        </View>
      </View>
      //Div Botão
      <View style={estilo.div_botoes}>
        <View style={estilo.div_sacar_depositar}>
          <Button onPress={sacar} color="white" title="SACAR" />
        </View>
        <View style={estilo.div_sacar_depositar}>
          <Button onPress={depositar} color="white" title="DEPOSITAR" />
        </View>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
    alignItems: "center",
  },
  logo_banco: {
    width: 250,
    height: 150,
    resizeMode: "contain",
    marginTop: "10%",
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
  div_saldo: {
    flexDirection: "row",
    marginTop: "5%",
  },
  h1: {
    fontSize: 42,
    fontWeight: "bold",
  },
  div_texto: {
    margin: 50,
  },
  p: {
    textAlign: "center",
    fontWeight: 600,
  },
  div_input_icone: {
    flexDirection: "row",
    width: "95%",
  },
  div_input: {
    flex: 1,
  },
  input: {
    backgroundColor: "#ECECEC",
    marginLeft: "5%",
    padding: "3%",
    width: "85%",
    height: 50,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  div_botoes: {
    flexDirection: "column",
    margin: "10%",
    width: "80%",
  },
  div_icone: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    flex: 0.1,
  },
  div_sacar_depositar: {
    marginBottom: "5%",
    backgroundColor: "#d22e2e",
    justifyContent: "center",
    borderRadius: 8,
  },
});
