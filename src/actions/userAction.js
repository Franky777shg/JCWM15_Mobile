import asyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'

export const login = async (data) => {
    return async (dispatch) => {
        try {
            const res = await Axios.post('http://192.168.100.3:2000/user/login', data)
            console.log(res.data)
            
            asyncStorage.setItem(res.data.id_users)

            dispatch({
                type: "LOGIN",
                payload: res.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}