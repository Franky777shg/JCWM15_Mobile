import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'

// import screens
import CartScreen from '../screen/CartScreen'
import WalletScreen from '../screen/WalletScreen'
import ProfileScreen from '../screen/ProfileScreen'

// import navigation
import ProductNavigation from './ProductNavigation'

const HomeNavigation = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName

                    if(route.name === 'Product') {
                        iconName = 'shoe-prints'
                    } else if (route.name === 'Cart') {
                        iconName = 'shopping-cart'
                    } 
                     else if (route.name === 'Wallet') {
                        iconName = 'wallet'
                    } 
                     else if (route.name === 'Profile') {
                        iconName = 'user-circle'
                    }

                    return <FontAwesomeIcon name={iconName} color={color} size={size}/>
                }
            })}
            tabBarOptions={{
                activeTintColor: '#28527a',
                inactiveTintColor: 'gray'
            }}>
            <Tab.Screen name="Product" component={ProductNavigation} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Wallet" component={WalletScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default HomeNavigation