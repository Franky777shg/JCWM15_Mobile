import React from 'react';
import Axios from 'axios'
import { FlatList, ScrollView, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import { Input, Icon, Button, Image } from 'react-native-elements'

// import styles
import styles from './style/unsplash'

const App = () => {
  const [input, setInput] = React.useState("")
  const [data, setData] = React.useState([])
  // console.log(data)

  const search = async () => {
    console.log(input)
    try {
      const res = await Axios.get(`https://api.unsplash.com/search/photos?query=${input}&client_id=cIGL5ESNKJBJr4VBdND7YN_LHq_IHSt7JJom9QQreXg`)
      setData(res.data.results)
    }
    catch (err) {
      console.log(err)
    }
  }

  const MapImages = () => {
    return (
      data.map((item, index) => {
        return (
          <Image
            containerStyle={{ margin: 5 }}
            key={index}
            source={{ uri: item.urls.regular }}
            style={{ width: 155, height: 155 }}
            PlaceholderContent={<ActivityIndicator />}
          />
        )
      })
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ONSPLASH</Text>
      <View style={styles.searchCont}>
        <Input
          placeholder='Search Photos'
          leftIcon={
            <Icon
              name='search'
              size={24}
              type='font-awesome'
              color="#517fa4"
            />
          }
          onChangeText={setInput}
        />
        <Button buttonStyle={{ width: 150 }} title="Search" onPress={search} />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <MapImages />
      </View>
    </ScrollView>
  )
}

export default App;
