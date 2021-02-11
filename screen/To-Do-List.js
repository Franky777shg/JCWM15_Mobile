import React from 'react';
import { FlatList, SafeAreaView, Text, View, Button } from 'react-native';
import { Input, Icon, ListItem, Overlay } from 'react-native-elements';

// import styles
import styles from './style/todolist'

const ToDoList = () => {
  const [input, setInput] = React.useState("") // input untuk add
  const [data, setData] = React.useState([
    "Ibadah",
    "Mandi",
    "Sarapan"
  ]) // data to do list
  const [idDelEdit, setIdDelEdit] = React.useState(null) // id untuk delete
  const [confDel, setConfDel] = React.useState(false) // visibilitas dari overlay untuk delete
  const [confEdit, setConfEdit] = React.useState(false) // visibilitas dari overlay untuk edit
  const [inputEdit, setInputEdit] = React.useState("") // input untuk edit

  const addHandle = () => {
    setData(prev => [...prev, input])
    setInput("")
  }

  const delHandle = () => {
    // console.log(idDel)
    let tempData = [...data]
    tempData.splice(idDelEdit, 1)
    setData(tempData)
    setConfDel(false)
    setIdDelEdit(null)
  }

  const editHandle = () => {
    let tempData = [...data]
    tempData.splice(idDelEdit, 1, inputEdit)
    setData(tempData)
    setConfEdit(false)
    setIdDelEdit(null)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder='Input your activity'
          leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
          onChangeText={text => setInput(text)}
          value={input}
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
            <ListItem
              containerStyle={styles.listItem}
              onPress={() => { setConfDel(true), setIdDelEdit(index) }}
              onLongPress={() => { setConfEdit(true), setIdDelEdit(index) }}
            >
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Overlay isVisible={confDel} onBackdropPress={() => setConfDel(false)} overlayStyle={styles.overlayDel} >
        <View style={styles.childOverlay}>
          <Text style={{ fontSize: 20 }}>Are you sure to delete?</Text>
          <View style={styles.buttonContainer}>
            <Button title="Yes" color="green" onPress={delHandle} />
            <Button title="No" color="red" onPress={() => setConfDel(false)} />
          </View>
        </View>
      </Overlay>
      <Overlay isVisible={confEdit} onBackdropPress={() => setConfEdit(false)} overlayStyle={styles.overlayEdit}>
        <View style={styles.childOverlay}>
          <Input
            placeholder='Input edit'
            onChangeText={text => setInputEdit(text)}
          />
          <View style={styles.buttonContainer}>
            <Button title="Yes" color="green" onPress={editHandle} />
            <Button title="No" color="red" onPress={() => setConfEdit(false)} />
          </View>
        </View>
      </Overlay>
    </SafeAreaView>
  )
}

export default ToDoList;
