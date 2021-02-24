import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'

// import navigation
import HomeNavigation from './HomeNavigation'

// import screens
import LoginScreen from '../screen/LoginScreen'
import RegisterScreen from '../screen/RegisterScreen'

// import actions
import { keepLogin } from '../actions'

const MainNavigation = () => {
    const { id } = useSelector((state) => {
        return {
            id: state.userReducer.id
        }
    })

    const dispatch = useDispatch()

    React.useEffect(() => {
        console.log('use effect trigered')
        dispatch(keepLogin())
    }, [])

    const Stack = createStackNavigator()
    return (
        <Stack.Navigator headerMode={false}>
            {id
                ? (
                    <>
                        <Stack.Screen name="Home" component={HomeNavigation} />
                    </>
                )
                : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </>
                )}

        </Stack.Navigator>
    )
}

export default MainNavigation