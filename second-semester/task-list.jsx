// Exercise: Use FlatLis and conditional structures to create a task list. *If the 'feito' parameter is changed to 'True', the string will will get a line-through.

import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function App() {
  const tarefas = [
    {
      id: 1,
      descricao: 'Jogar o lixo fora',
      feito: false,
    },
    {
      id: 2,
      descricao: 'Limpar o quarto',
      feito: true,
    },
    {
      id: 3,
      descricao: ' Arrumar a cama',
      feito: false,
    },
  ];
  return (
    <View style={estilo.container}>
      <Text style={estilo.h1}>Lista de Tarefas</Text>
      <View style={estilo.div_tarefas}>
      <FlatList
        data={tarefas}
        renderItem={({item}) => (
          <Text style={estilo.h2}> {item.descricao} </Text>,
          <Text style={estilo.h2}> {item.feito == true ? <Text style={{textDecorationLine: 'line-through'}}>{item.descricao}</Text>: item.descricao} </Text>
          )}
      />
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: '#FFFAFA'
  },
  div_tarefas: {
    textAlign: 'left',
    
  },
  h1: {
    fontSize: 40,
    marginBottom: 40,
    marginTop: 80
  },
  h2: {
    fontSize: 25,
    borderBottomWidth: 1,
    borderColor: 'darkgray',
    paddingBottom: '5%',
    paddingTop: '5%'
  }
});
