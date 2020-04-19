import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';


export default function App() 
{

  const [contato, setContato] = useState({ nome: '', telefone: '' })
  const [contatos, setContatos] = useState([])
  const [contador, setContador] = useState(0)

  const capturarNome = (nome) => {

    let nomeContato = nome
    let telefoneContato = contato.telefone
    
    setContato({
      
      nome: nomeContato,
      telefone: telefoneContato

    })

  }

  const capturarTelefone = (telefone) => {

    let nomeContato = contato.nome
    let telefoneContato = telefone

    setContato({

      nome: nomeContato,
      telefone: telefoneContato

    })

  }

  const adicionarContato = () => {

    setContatos((contatos) => {

      console.log(contato)
      console.log(contatos)

      setContador(contador + 1)

      return [...contatos, { key: contador.toString(), nome: contato.nome, telefone: contato.telefone }]

    })

  }


  return (
    <View style={styles.telaPrincipal}>
      <View style={styles.contatoView}>
        <View style={styles.contatoInput}>
          <TextInput
            placeholder={'Nome:'}
            onChangeText={capturarNome}
            value={contato.nome}
          />
          <TextInput
            placeholder={'Telefone:'}
            onChangeText={capturarTelefone}
            value={contato.telefone}
          />
        </View>
        <Button
          title='+'
          onPress={adicionarContato}
        />
      </View>
      <FlatList
        data={contatos}
        renderItem={
          contato => (
            <View style = {styles.itemNaLista}>
              <View>
                <Text>
                  {contato.item.nome}
                </Text>
              </View>
              <View>
              <Text>
                  {contato.item.telefone}
                </Text>
              </View>
            </View>
          )
        }
      />
    </View>
  )

}



const styles = StyleSheet.create({
  telaPrincipal: {
    padding: 50,
    backgroundColor: '#00000011'

  },

  contatoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'darkblue',
    borderRadius: 5

  },

  itemNaLista: {
    padding: 12,
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 5,
    borderColor: 'darkblue'

  },

  contatoInput: {
    width: '83%',
    flexDirection: 'column',
    paddingRight: 2,
    paddingLeft: 2,

  }

})
