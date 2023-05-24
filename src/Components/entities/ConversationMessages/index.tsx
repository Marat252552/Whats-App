import { useState, useEffect } from 'react'
import styles from './lib/styles.module.css'
import TextMessage from '../TextMessage'
import { TextMessage_T } from '../../shared/types'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import DialogsState from '../../state/DialogsState'
import MessagesState from '../../state/MessagesState'
import UserState from '../../state/UserState'
import GetNotificationAPI from '../../GreenAPI/GetNotificationAPI'
import DeleteNotificationAPI from '../../GreenAPI/DeleteNotificationAPI'

const ConversationMessages = observer(() => {
  let subscribe = async () => {
    try {
      let response = await GetNotificationAPI(UserState.idInstance, UserState.apiTokenInstance)
      if(response.data !== null) {
        let chatId = response.data.body.senderData.chatId
        let textMessage = response.data.body.messageData.textMessageData.textMessage
        let idMessage = response.data.body.idMessage
        let type = 'incoming'
        MessagesState.addMessage(chatId, textMessage, idMessage, type)
        await DeleteNotificationAPI(UserState.idInstance, UserState.apiTokenInstance, response.data.receiptId)
      }
      subscribe()
    } catch (e) {
      console.log(e)
      setTimeout(() => {
        subscribe()
      }, 500)
    }
  }
  useEffect(() => {
    subscribe()
  }, [])
  return <div className={styles.mainContainer}>
    <button onClick={() => {
      console.log(toJS(MessagesState.messages))
      console.log(toJS(DialogsState.currentDialogChatId))
    }}>Analyze</button>
    {MessagesState.messages.filter(el => {
      return el.chatId === DialogsState.currentDialogChatId
    }).map(message => {
      return <TextMessage key={message.idMessage} message={message} />
    })}
  </div>
})

export default ConversationMessages