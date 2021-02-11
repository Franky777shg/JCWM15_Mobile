import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native'
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
    </View>
  )
}

const App = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

// Home, detail