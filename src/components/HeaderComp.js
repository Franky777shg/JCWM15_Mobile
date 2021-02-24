import React from 'react'
import { StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'

// import components
import AvatarComp from './AvatarComp'

const HeaderComp = ({ username }) => {
    return (
        <Header
            centerComponent={{ text: 'Home', style: styles.centercomponent }}
            rightComponent={
                <AvatarComp username={username} />
            }
            backgroundColor='#28527a'
            containerStyle={{ marginBottom: 5 }}
        />
    )
}

const styles = StyleSheet.create({
    centercomponent: {
        color: '#fff',
        fontSize: 20
    }
})

export default HeaderComp