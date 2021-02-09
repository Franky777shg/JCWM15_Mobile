import React from 'react';
import { View, SafeAreaView, FlatList, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard } from 'react-native'

// import screen
// import FormData from './screen/FormData-Hook'
// import BasicComp from './screen/Basic-Comp'

const CompExer = () => {
  const [user, setUser] = React.useState([
    {
      id: 1,
      name: "Budi",
      age: 12
    },
    {
      id: 2,
      name: "Andi",
      age: 15
    },
    {
      id: 3,
      name: "Jojo",
      age: 17
    }
  ])

  return (
    // <SafeAreaView style={styles.container}>
    //   {/* <FormData/> */}
    //   <Text>Hello World</Text>
    //   <View style={styles.containerUser}>
    //     <FlatList
    //       data={user}
    //       renderItem={({ item }) => (
    //         <View style={styles.list}>
    //           <Text>{item.name}</Text>
    //           <Text>{item.age}</Text>
    //         </View>
    //       )}
    //       keyExtractor={item => item.id.toString()} />
    //   </View>
    //   <Button title="Show Toast" onPress={() => {
    //     ToastAndroid.showWithGravity("This is toast", ToastAndroid.SHORT, ToastAndroid.TOP)
    //   }} />
    // </SafeAreaView>
  <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   padding: 10
  // },
  // containerUser: {
  //   height: 200,
  //   marginVertical: 20,
  //   backgroundColor: "#c7ffd8",
  //   padding: 10
  // },
  // list: {
  //   backgroundColor: 'salmon',
  //   marginVertical: 10
  // }
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
})

export default CompExer;
