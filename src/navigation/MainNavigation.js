import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch } from 'react-redux'

// import screens
import HomeScreen from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'
import RegisterScreen from '../screen/RegisterScreen'

// import actions
import { keepLogin } from '../actions'

const MainNavigation = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        console.log('use effect trigered')
        dispatch(keepLogin())
    })

    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigation