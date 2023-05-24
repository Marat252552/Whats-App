

type Result_T = {
    status: number,
    data: {
        name: string,
        lastName: string,
        email: string,
        imgSRC: string,
        isActivated: number,
        AccessToken: string
    }
}

export type LoginAPI_T = (idInstance: string, apiTokenInstance: string) => Promise<Result_T>