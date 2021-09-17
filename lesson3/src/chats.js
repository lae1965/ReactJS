import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import { Message } from './Message';
import { AUTORS } from './Util/constants';
import { Form } from './form';
import { ChatList } from './chatslist';
import { useParams } from 'react-router';

const initialChats = [
    {
        topic: 'Microcontroller AtMega-8',
        id: 'chat-1'
    },
    {
        topic: 'Microcontroller Pic16f84a',
        id: 'chat-2'
    }
];

const initialMessages = {
    'chat-1': [
        {
            text: 'message1',
            autor: AUTORS.HUMAN
        },
        {
            text: 'Message received', 
            autor: AUTORS.BOT
        }
    ],
    'chat-2': []
};

function Chats() {
    const { chatId } = useParams();
    
    const [messageList, setMessageList] = useState(initialMessages);
    // eslint-disable-next-line
    const [chatList, setChatList] = useState(initialChats);

    const sendMessage = useCallback((message) => {
        setMessageList(prevMessage =>( 
            {...prevMessage, [chatId]: [...prevMessage[chatId], message]}
        ));
    }, [chatId]);

    const addMessage = useCallback((value) => {
        sendMessage({text: value, autor: AUTORS.HUMAN});
    }, [sendMessage]);

    useEffect(() => {
        let timeout;
        const curMess = messageList[chatId];
        if (!!chatId && curMess?.[curMess.length - 1]?.autor === AUTORS.HUMAN) {
            timeout = setTimeout(() => {
                sendMessage({text: 'Message received', autor: AUTORS.BOT});
            }, 1000);
        }
        return () => clearTimeout(timeout);
    }, [messageList, chatId, sendMessage]);

    return (
        <div className="App">
            <div className="App-left">
                <h2 className="App-heading">List of chats</h2>
                <ChatList chatList={chatList}></ChatList>
            </div>
            <header className="App-header">
                {!!chatId && 
                    <>
                        <Form onSubmit={addMessage}></Form>        
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