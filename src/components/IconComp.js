import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const IconComp = ({ iconName, color = '#ffffff' }) => {
    return (
        <Icon
            name={iconName}
            size={15}
            color={color}
        />
    )
}

export default IconComp