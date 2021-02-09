import React from 'react';
import {
  View, Text, Image, TextInput, ScrollView, StyleSheet, Button, Alert
} from 'react-native';

const BasicComp = () => {
  const [valueInput, setValueInput] = React.useState('Default value')
  console.log(valueInput)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.red} />
      <View style={styles.blue} />
      <Text>Hello World</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
        }}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={e => setValueInput(e)}
        value={valueInput}
      />
      <Button style={styles.button} title="Test" onPress={() => console.log('trigered')} />

      <Button title="Show Alert" onPress={() => Alert.alert('Tombol alert di tekan')} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    backgroundColor: 'yellow'
  },
  blue: {
    backgroundColor: "blue",
    height: 50
  },
  red: {
    backgroundColor: "red",
    height: 50
  },
  image: {
    width: 50,
    height: 50
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10
  },
  button: {
    marginVertical: 10,
  }
})

export default BasicComp;
