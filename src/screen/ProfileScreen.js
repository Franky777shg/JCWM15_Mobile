import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
    Button
} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { CommonActions } from '@react-navigation/native'

// import actions
import { logout } from '../actions'

const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const { id } = useSelector((state) => {
        return {
            id: state.userReducer.id
        }
    })

    React.useEffect(() => {
        if (!id) {
            //redirect to login screen while reset react navigation state
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [{ name: "Login" }]
            })
            navigation.dispatch(resetAction)
        }
    })

    return (
        <View style={styles.container} >
            <Text style={styles.title}>Profile</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Logout"
                    onPress={() => dispatch(logout())}
                    buttonStyle={styles.button}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fbeeac',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#28527a'
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        width: 200,
        backgroundColor: '#28527a'
    }
})

export default ProfileScreen