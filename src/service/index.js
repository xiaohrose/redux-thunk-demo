import Axios from 'axios'

export function Test() {
    return Axios.get('/api/v1/test')
}