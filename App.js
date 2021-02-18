import React from 'react';
import { ScrollView, Text, View, Button, TextInput } from 'react-native'
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

const App = () => {
  return (
    <Provider store={globalStore}>
      <View>
        <Text>Hello World</Text>
      </View>
    </Provider>
  )
}

export default App;