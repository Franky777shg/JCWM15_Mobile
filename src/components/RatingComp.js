import React from 'react'
import { Rating } from 'react-native-elements'

const RatingComp = ({ count }) => {
    return (
        <Rating
            imageSize={20}
            readonly
            startingValue={count}
        />
    )
}

export default RatingComp