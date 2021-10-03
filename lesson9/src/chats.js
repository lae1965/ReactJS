import React, { useCallback, useEffect, useRef } from 'react';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import './App.css';
import { Message } from './Message';
import { Form } from './form';
import { ChatList } from './chatslist';
import { addChatToDb, deleteChatFromDb, getChatListFromDb } from './store/chats/action';
import { addMessageToDbWithAnswer, getMessageListFromDb } from './store/messages/action';
import { selectChatList } from './store/chats/selectors';
import { selectMessageList } from './store/messages/selectors';
import { persistor } from './store';

function Chats() {
    persistor.purge();
    const { chatId } = useParams();

    const unsubscribeRef = useRef(null);
    
    const chatList = useSelector(selectChatList);
    const messageList = useSelector(selectMessageList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChatListFromDb());
    }, [dispatch]);

    useEffect(() => {
        if (unsubscribeRef.current) unsubscribeRef.current();

        const unsubscribe = dispatch(getMessageListFromDb(chatId));
        dispatch(getMessageListFromDb(chatId));
        unsubscribeRef.current = unsubscribe;
        return unsubscribe;
    }, [chatId, dispatch]);

    const handleAddChat = useCallback(() => {
        dispatch(addChatToDb(chatList));
    }, [chatList, dispatch]);

    const handleAddMessage = useCallback((value) => {
        dispatch(addMessageToDbWithAnswer(value, chatId));
    }, [chatId, dispatch]);

    const handleDeleteChat = useCallback(() => {
        dispatch(deleteChatFromDb(chatId));
    }, [dispatch, chatId]);

    if (!!chatId && !chatList.find((el) => el.id ===chatId)) return <Redirect to="/chats"/>;

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
                        {(messageList || []).map((message, i) => 
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