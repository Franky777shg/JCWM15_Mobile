import React from 'react';
import Axios from 'axios'
import { ScrollView, Text, View, Button, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = ({ navigation, route }) => {
  const [movies, setMovies] = React.useState([])
  console.log(movies)

  const getMovies = () => {
    Axios.get('http://192.168.100.3:2000/movies/get/all')
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
  }
  // console.log(navigation)
  // console.log(route)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>This is Home</Text>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate('Details Screen', {
            name: "Budi",
            id: 2
          })
        }} />
      <Button
        title="Go to Post"
        onPress={() => {
          navigation.navigate('Post Screen')
        }} />
      <Button
        title="Open Drawer"
        onPress={() => {
          navigation.openDrawer()
        }} />
      <Button
        title="Get Movies"
        onPress={getMovies}
      />
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
          navigation.navigate('Home Screen')
        }}
      />
      <Button
        title="Post again"
        onPress={() => {
          navigation.navigate('Post Screen')
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
          navigation.navigate('Details Screen', {
            post: input
          })
          setInput("")
        }}
      />
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Home Screen')
        }}
      />
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details Screen')
        }}
      />
      <Button
        title="Go to Test"
        onPress={() => {
          navigation.navigate('Test Screen')
        }}
      />
    </View>
  )
}

const TestScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is Test Screen</Text>
    </View>
  )
}

// Create home stack screen
const HomeDrawerNavigator = () => {
  const HomeDrawer = createDrawerNavigator()

  return (
    <HomeDrawer.Navigator>
      <HomeDrawer.Screen name="Home Screen" component={Home} />
      <HomeDrawer.Screen name="Details Screen" component={Details} />
      <HomeDrawer.Screen name="Test Screen" component={TestScreen} />
    </HomeDrawer.Navigator>
  )
}

// create post stack screen
const PostStackNavigator = () => {
  const PostStack = createStackNavigator()

  return (
    <PostStack.Navigator>
      <PostStack.Screen name="Post Screen" component={Post} />
      <PostStack.Screen name="Details Screen" component={Details} />
    </PostStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Home Tab") {
              iconName = 'home'
            } else if (route.name === "Post Tab") {
              iconName = 'info-circle'
            }

            return <Icon name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: 'salmon',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Home Tab" component={HomeDrawerNavigator} />
        <Tab.Screen name="Post Tab" component={PostStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;