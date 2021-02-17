import React from 'react';
import Axios from 'axios'
import { ScrollView, Text, View, Button, TextInput } from 'react-native'

const App = () => {

  React.useEffect(() => {
    Axios.get('http://192.168.100.3:2000/')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )
}

export default App;