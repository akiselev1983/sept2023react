
const baseURL = 'http://owu.linkpc.net/carsAPI/v2';

const users = '/users'
const auth = '/auth'
const cars = '/cars'

const urls = {
    cars:{
        base: cars,
        byId:(id)=> `${cars}/${id}`
    },
    auth:{
        login: auth,
        register:users,
        me:`${auth}/me`
    }
}

export {baseURL,urls}