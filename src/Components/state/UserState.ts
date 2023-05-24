import { makeAutoObservable } from "mobx";

class UserState {
    apiTokenInstance = ''
    idInstance = ''
    isLogged = false
    constructor() {
        makeAutoObservable(this)
    }
    setApiTokenInstance(value: string) {
        this.apiTokenInstance = value
    }
    setIdInstance(value: string) {
        this.idInstance = value
    }
    setIsLogged(value: boolean) {
        this.isLogged = value
    }
}

export default new UserState()