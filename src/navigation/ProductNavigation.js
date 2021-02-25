import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

// import screens
import ProductScreen from '../screen/ProductScreen'
import ProductDetail from '../screen/ProductDetail'

// imports components
import AvatarComp from '../components/AvatarComp'

const ProductNavigation = () => {
    const Stack = createStackNavigator()

    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    })

    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                component={ProductScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#28527a',
                    },
                    headerTitleStyle: {
                        color: '#ffffff'
                    },
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <AvatarComp username={username} />
                    ),
                    headerRightContainerStyle: {
                        marginRight: 15
                    }
                }}
            />
            <Stack.Screen
                name="Product Detail"
                component={ProductDetail}
                options={{
                    headerStyle: {
                        backgroundColor: '#28527a',
                    },
                    headerTintColor: '#ffffff',
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <AvatarComp username={username} />
                    ),
                    headerRightContainerStyle: {
                        marginRight: 15
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default ProductNavigation