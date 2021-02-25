import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
    Button
} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { CommonActions } from '@react-navigation/native'

// import actions
import { logout } from '../actions'

// import style
import styles from '../style/profileStyle'

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

export default ProfileScreen