import React from 'react'
import { StyleSheet } from 'react-native'

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

export default styles