import React from 'react';
import {
  View, Text, Image, TextInput, ScrollView, StyleSheet, Button, Alert
} from 'react-native';

const FormData = () => {
  const [user, setUser] = React.useState(["", "", "", "", ""])
  const [data, setData] = React.useState({
    firstName: "Input your first name",
    lastName: "Input your last name",
    gender: "Input your gender",
    age: "Input your age",
    hobby: "Input your hobby"
  })
  // console.log(data)

  const submit = () => {
    const newArr = [data.firstName, data.lastName, data.gender, data.age, data.hobby]
    setUser(newArr)
    setData({
      firstName: "Input your first name",
      lastName: "Input your last name",
      gender: "Input your gender",
      age: "Input your age",
      hobby: "Input your hobby"
    })
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Form Data</Text>
      <TextInput style={styles.input} value={data.firstName} onChangeText={value => setData({...data, firstName: value}) }/>
      <TextInput style={styles.input} value={data.lastName} onChangeText={value => setData({...data, lastName: value}) }/>
      <TextInput style={styles.input} value={data.gender} onChangeText={value => setData({...data, gender: value}) }/>
      <TextInput style={styles.input} value={data.age} onChangeText={value => setData({...data, age: value}) }/>
      <TextInput style={{...styles.input, marginBottom: 20}} value={data.hobby} onChangeText={value => setData({...data, hobby: value}) }/>
      <Button title="Submit" onPress={submit}/>

      <View style={{marginTop: 30}}>
        <Text style={styles.title}>Result</Text>
        <Text>First Name: {user[0]}</Text>
        <Text>Last Name: {user[1]}</Text>
        <Text>Gender: {user[2]}</Text>
        <Text>Age: {user[3]}</Text>
        <Text>Hobby: {user[4]}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    // backgroundColor: 'yellow'
  },
  title: {
    textAlign: 'center',
    fontSize: 30
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
    borderRadius: 10
  }
})

export default FormData;
