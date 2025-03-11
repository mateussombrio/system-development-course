// Exercise: Use FlatList to creat cards of X-men characters

import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

export default function App() {
  const wolverine_image =
    'https://i0.wp.com/ovicio.com.br/wp-content/uploads/2024/03/20240321-ovicio-wolverine-xmen97.jpg?fit=1280%2C670&ssl=1';
  const ciclope_image =
    'https://tm.ibxk.com.br/2024/04/12/12101409861052.jpg?ims=1200x675';
  const noturno_image =
    'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/12/13-28.jpg';
  const tempestade_image =
    'https://static.wikia.nocookie.net/marvel-cosmic/images/b/bd/Tempestade_Classica.jpg/revision/latest?cb=20150605133837&path-prefix=pt-br';

  const herois_info = [
    {
      id: 1,
      nome: 'Wolverine',
      image: wolverine_image,
      forca: 'Força: ' + 3200,
      nacionalidade: 'Toronto, Canadá',
    },
    {
      id: 2,
      nome: 'Ciclope',
      image: ciclope_image,
      forca: 'Força: ' + 2500,
      nacionalidade: 'Chicago, Illinois',
    },
    {
      id: 3,
      nome: 'Noturno',
      image: noturno_image,
      forca: 'Força: ' + 2000,
      nacionalidade: 'Paris, França',
    },
    {
      id: 4,
      nome: 'Tempestade',
      image: tempestade_image,
      forca: 'Força: ' + 1900,
      nacionalidade: 'Nairóbi, Quênia',
    },
  ];
  return (
    // Div Geral
    <View style={estilo.container}>
      // Div Header
      <View style={estilo.header}>
        <Text style={estilo.h1}> X-Men </Text>
      </View>
      // Div Cards
      
        <FlatList
          data={herois_info}
          renderItem={({ item }) => (
            // Div Pai
            <View style={estilo.cards}>
              // Div Imagem
              <View>
                <Image style={estilo.imagem} source={{ uri: item.image }} />
              </View>
              //Div Info
              <View style={estilo.div_info}>
                <Text style={estilo.h2}> {item.nome} </Text>
                <Text style={estilo.h3}> {item.forca} </Text>
                <Text style={estilo.h3}> {item.nacionalidade} </Text>
              </View>
            </View>
          )}
            keyExtractor={(item) => item.id.toString()}
        />
      
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
  },
  header: {
    backgroundColor: 'orange',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 30,
    color: '#FFFAFA',
  },
  h2: {
    fontSize: 20,
    color: 'black',
    marginBottom: '5%',
  },
  h3: {
    fontSize: 15,
    color: 'gray',
  },
  cards: {
    flexDirection: 'row',
    margin: '5%',
    borderBottomWidth: 2,
    borderColor: 'gray',
    marginLeft: "10%",
    marginRight: '10%'
  },
  div_info: {
    flexDirection: 'column',
    alignContent: 'flex-start',
    marginLeft: '5%',
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: "15%",
  },
});
