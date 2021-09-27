import axios from 'axios'

let config = {
    headers: {
        Authorization: ''
    }
}

const _axios = axios.create(config)

export default _axios