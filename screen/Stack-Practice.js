import React from 'react';
import { ScrollView, Text, View, Button, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Home = ({ navigation, route }) => {
  // console.log(navigation)
  // console.log(route)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>This is Home</Text>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate('Details', {
            name: "Budi",
            id: 2
          })
        }} />
      <Button
        title="Go to details by push"
        onPress={() => {
          navigation.push('Details')
        }} />
      <Button
        title="Go to Home by push"
        onPress={() => {
          navigation.push('Home')
        }} />
      <Button
        title="Go to Post"
        onPress={() => {
          navigation.navigate('Post')
        }} />
    </View>
  )
}

const Details = ({ navigation, route }) => {
  console.log('route', route)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>This is Details</Text>
      <Text style={{ fontSize: 20 }}>
        Name from Home Page : {route.params ? route.params.name : 'Gak ada'}
      </Text>
      <Text style={{ fontSize: 20 }}>
        Post from Post Page : {route.params ? route.params.post : 'Gak ada'}
      </Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Home')
        }}
      />
      <Button
        title="Go to details again"
        onPress={() => {
          navigation.push('Details')
        }}
      />
      <Button
        title="Go to Home by push"
        onPress={() => {
          navigation.push('Home')
        }}
      />
      <Button
        title="Post again"
        onPress={() => {
          navigation.navigate('Post')
        }}
      />
    </View>
  )
}

const Post = ({ navigation, route }) => {
  const [input, setInput] = React.useState("")

  return (
    <View>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={input}
        onChangeText={setInput}
      />
      <Button
        title="Post"
        onPress={() => {
          console.log(input)
          navigation.navigate('Details', {
            post: input
          })
          setInput("")
        }}
      />
    </View>
  )
}

const StackNav = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'salmon',
          },
          headerTintColor: "#ffffff"
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: 'salmon'
            },
            // headerTintColor: "#ffffff",
            headerTitleAlign: 'center',
            headerRight: () => (
              <Button
              title="Login"
              onPress={() => (console.log('test'))}
              />
            )
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{ name: 'initial params' }}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Post"
          component={Post}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNav;

// home, details, home