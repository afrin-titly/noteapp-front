import axios from 'axios'
// import login from '../store/modules/login'
import Cookie from "js-cookie"

let config = {
    headers: {
        Authorization: "bearer "+Cookie.get("token")
    }
}

const _axios = axios.create(config)
// const _axios = axios.create()

export default _axios