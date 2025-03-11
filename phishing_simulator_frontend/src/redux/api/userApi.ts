import axios from "axios"
import { RegisterParams } from "src/@core/context/types"
import userEndpoints from 'src/configs/user'

const registerUserApi = (body: RegisterParams) => {
    return axios.post(userEndpoints.registerEndpoint, body)
}


export default {
    registerUserApi,
}