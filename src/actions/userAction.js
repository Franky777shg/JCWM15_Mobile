import asyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'

export const login = (data) => {
    return async (dispatch) => {
        try {
            console.log('before axios')
            const res = await Axios.post('http://192.168.100.3:2000/user/login', data)
            console.log(res.data)
            console.log('after axios')

            await asyncStorage.setItem('token', res.data.token)

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

export const register = (data) => {
    return async (dispatch) => {
        try {
            const res = await Axios.post('http://192.168.100.3:2000/user/register', data)
            console.log(res.data)

            await asyncStorage.setItem('token', res.data.token)

            dispatch({
                type: 'LOGIN',
                payload: res.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const keepLogin = () => {
    return async (dispatch) => {
        try {
            console.log('keep login terpanggil')
            const token = await asyncStorage.getItem('token')

            if (!token) return
            console.log('ada token')

            const res = await Axios.post('http://192.168.100.3:2000/user/keeplogin', { token })
            console.log(res.data)

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

export const logout = () => {
    return async (dispatch) => {
        try {
            await asyncStorage.removeItem('token')

            dispatch({
                type: 'LOGOUT'
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

