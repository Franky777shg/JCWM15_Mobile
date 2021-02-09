import React from 'react';
import Axios from 'axios'
import { View, SafeAreaView, FlatList, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard } from 'react-native'

// import screen
// import FormData from './screen/FormData-Hook'
// import BasicComp from './screen/Basic-Comp'

const App = () => {
  const [count, setCount] = React.useState(0)
  const [user, setUser] = React.useState([])
  // console.log(user)

  const incby5 = () => {
    for(i = 0; i < 5; i++) {
      setCount(prev => prev + 1)
    }
  }

  React.useEffect(() => {
    console.log('useEffect trigered')
  }, [user, count])

  const getData = () => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      // console.log(res.data)
      setUser(res.data)
    })
    .catch(err => console.log(err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{count}</Text>
      <View style={styles.buttonView}>
        <Button title="Decrement" onPress={() => setCount(count - 1)}/>
        <Button title="Increment" onPress={() => setCount(count + 1)}/>
        <Button title="Increment by 5" onPress={incby5}/>
        <Button title="Fetching Data" onPress={getData}/>
      </View>
      <Text>you have clicked {count} times</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  number: {
    fontSize: 100,
    textAlign: 'center'
  },
  buttonView: {
    height: 150,
    // backgroundColor: "salmon",
    justifyContent: 'space-around'
  },
  container: {
    padding: 15
  }
})

export default App;
