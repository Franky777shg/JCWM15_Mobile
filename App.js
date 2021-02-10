import React from 'react';
import { FlatList, SafeAreaView, Text, View, Button } from 'react-native';
import { Input, Icon, ListItem, Overlay } from 'react-native-elements';

// import styles
import styles from './style/todolist'

const App = () => {
  const [input, setInput] = React.useState("")
  const [data, setData] = React.useState([
    "Ibadah",
    "Mandi",
    "Sarapan"
  ])
  const [idDel, setIdDel] = React.useState(null)
  const [confDel, setConfDel] = React.useState(false)

  const addHandle = () => {
    setData(prev => [...prev, input])
  }

  const delHandle = () => {
    // console.log(idDel)
    let tempData = [...data]
    tempData.splice(idDel, 1)
    setData(tempData)
    setConfDel(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder='INPUT WITH ICON'
          leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
          onChangeText={text => setInput(text)}
        />
        <Icon
          reverse
          name='plus'
          type='font-awesome'
          color='#517fa4'
          onPress={addHandle}
        />

      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <ListItem containerStyle={styles.listItem} onPress={() => { setConfDel(true), setIdDel(index) }}>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Overlay isVisible={confDel} onBackdropPress={() => setConfDel(false)} overlayStyle={styles.overlay} >
        <View style={styles.childOverlay}>
          <Text style={{ fontSize: 25 }}>Are you sure?</Text>
          <View style={styles.buttonContainer}>
            <Button title="Yes" color="green" onPress={delHandle} />
            <Button title="No" color="red" onPress={() => setConfDel(false)} />
          </View>
        </View>
      </Overlay>
    </SafeAreaView>
  )
}

export default App;
