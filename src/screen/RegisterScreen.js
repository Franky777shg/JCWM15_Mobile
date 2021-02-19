import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
    Input,
    Button
} from 'react-native-elements'

const RegisterScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <Input
                placeholder="Username"
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                // onChangeText={setUsername}
                style={styles.input}
            />
            <Input
                placeholder="Password"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                // onChangeText={setPassword}
                style={styles.input}
            />
            <Input
                placeholder="Email"
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                // onChangeText={setPassword}
                style={styles.input}
            />
            <Button
                title="Register"
                onPress={() => console.log('')}
            />
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        // backgroundColor: 'salmon',
        flex: 1
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    input: {
        marginVertical: 15
    }
})

export default RegisterScreen