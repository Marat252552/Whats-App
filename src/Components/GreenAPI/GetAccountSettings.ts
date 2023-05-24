import GreenAPIInstance from "./Instance"


const GetAccountSettings = (idInstance: string, apiTokenInstance: string ) => {
    return GreenAPIInstance.get(`/waInstance${idInstance}/getSettings/${apiTokenInstance}`)
}

export default GetAccountSettings