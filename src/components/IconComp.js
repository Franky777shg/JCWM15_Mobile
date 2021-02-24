import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const IconComp = ({ iconName }) => {
    return (
        <Icon
            name={iconName}
            size={15}
            color="#28527a"
        />
    )
}

export default IconComp