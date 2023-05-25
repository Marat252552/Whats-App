export type StateChat_T = {
    chatId: string,
    name: string
}


export type TextMessage_T = {
    type: string,
    idMessage: string,
    timestamp: number,
    typeMessage: string,
    chatId: string,
    textMessage: string,
    senderId: string,
    senderName: string
}

export type Companion_T = {
    name: string,
    lastTimeOnline: string,
}

export type Contact_T = {
    id: string,
    name: string,
    type: string
}

export type Chat_T = {
    archive: boolean,
    id: string,
    notSpam: boolean,
    ephemeralExpiration: 0,
    ephemeralSettingsTimestamp: 0
}