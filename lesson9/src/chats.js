import React, { useCallback } from 'react';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import './App.css';
import { Message } from './Message';
import { AUTORS } from './Util/constants';
import { Form } from './form';
import { ChatList } from './chatslist';
import { addChat, deleteChat } from './store/chats/action';
import { addMessage, addMessageWithThunk, deleteChatMessages } from './store/messages/action';
import { selectChatList } from './store/chats/selectors';
import { selectMessageList } from './store/messages/selectors';

function Chats() {
    const { chatId } = useParams();
    
    const messageList = useSelector(selectMessageList);
    const chatList = useSelector(selectChatList);
    const dispatch = useDispatch();

    const handleAddMessage = useCallback((value) => {
        dispatch(addMessageWithThunk(value, AUTORS.HUMAN, chatId));
    }, [dispatch, chatId]);

    const handleAddChat = useCallback(() => {
        let newId;
        do {
            newId = `chat-${parseInt(Math.random()*1000)}`;
            // eslint-disable-next-line
        } while (chatList.length !== 0 && !!chatList.find(el => el.id === newId));

        dispatch(addChat(prompt("A topic name of the new chat"), newId));
        dispatch(addMessage('', '', newId));
    }, [dispatch, chatList]);

    const handleDeleteChat = useCallback(() => {
        dispatch(deleteChat(chatId));
        dispatch(deleteChatMessages(chatId));
    }, [dispatch, chatId]);

    if (!!chatId && messageList[chatId] === undefined) return <Redirect to="/chats"/>

    return (
        <div className="App">
            <div className="App-left">
                <Button onClick={handleAddChat} variant="contained" color="primary">Add new chat</Button>
                {!!chatId && <Button onClick={handleDeleteChat} style={{display: 'block', marginTop: '10px'}} variant="contained" color="primary">Delete current chat</Button>}
                <h2 className="App-heading">List of chats</h2>
                <ChatList chatList={chatList}></ChatList>
            </div>
            <header className="App-header">
                {!!chatId && 
                    <>
                        <Form onSubmit={handleAddMessage}></Form>        
                        {messageList[chatId].map((message, i) => 
                            <Message 
                                key={i} 
                                text={message.text} 
                            />
                        )}
                    </>    
                }
            </header>
        </div>
    );
}

export default Chats;