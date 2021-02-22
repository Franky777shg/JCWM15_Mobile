import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
    Input,
    Button
} from 'react-native-elements'
import { useDispatch } from 'react-redux'

// import actions
import { register } from '../actions'

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")

    const dispatch = useDispatch()

    const handleRegister = () => {
        const user = {username, password, email}
        console.log(user)

        dispatch(register(user))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <Input
                placeholder="Username"
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                onChangeText={setUsername}
                style={styles.input}
            />
            <Input
                placeholder="Password"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={setPassword}
                style={styles.input}
            />
            <Input
                placeholder="Email"
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                onChangeText={setEmail}
                style={styles.input}
            />
            <Button
                title="Register"
                onPress={handleRegister}
                buttonStyle={styles.button}
                />
            <Button
                title="Back to Login"
                onPress={() => navigation.navigate('Login')}
                buttonStyle={styles.button}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fbeeac',
        flex: 1
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    input: {
        marginVertical: 15
    },
    button:{
        marginVertical: 5,
        backgroundColor: '#28527a'
    }
})

export default RegisterScreen