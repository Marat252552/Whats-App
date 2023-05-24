import AxiosInstance from "../../../../../shared/AxiosInstance"
import { LoginAPI_T } from "../../../Lib/types"

const LoginAPI: LoginAPI_T = async (idInstance: string, apiTokenInstance: string) => {
    return await AxiosInstance.post('/auth/login', { 
        idInstance,
        apiTokenInstance
     })
}

export default LoginAPI