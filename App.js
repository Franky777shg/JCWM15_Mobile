import React from 'react';
import { ScrollView, Text, View, Button, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// ip = 192.168.100.3

// setup redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import allReducer from './src/reducers'

// create global store
const globalStore = createStore(
  allReducer,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

// import navigation
import MainNavigation from './src/navigation/MainNavigation'

const App = () => {
  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App;