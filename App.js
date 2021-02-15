import React from 'react';
import { ScrollView, Text, View, Button, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';

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
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Home')
        }}
      />
    </View>
  )
}

const App = () => {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Home") {
              iconName = 'home'
            } else if (route.name === "Details") {
              iconName = 'info-circle'
            } else if (route.name === "Post") {
              iconName = 'mail-bulk'
            }

            return <Icon name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: 'salmon',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={Details} />
        <Tab.Screen name="Post" component={Post} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;