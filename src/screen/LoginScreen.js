import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {
    Input,
    Button
} from 'react-native-elements'

// import actions
import { login } from '../actions'

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const { id } = useSelector((state) => {
        return {
            id: state.userReducer.id
        }
    })

    const dispatch = useDispatch()

    const handleLogin = () => {
        const user = { username, password }
        console.log(user)

        dispatch(login(user))
        setUsername("")
        setPassword("")
    }

    React.useEffect(() => {
        if(id) return navigation.navigate('Home')
    }, [id])

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Login</Text> */}
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
            <Button
                title="Login"
                onPress={handleLogin}
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

export default LoginScreen