import React, { useEffect, useState, useCallback } from 'react';
import { Redirect, useParams } from 'react-router';
import './App.css';
import { Message } from './Message';
import { AUTORS } from './Util/constants';
import { Form } from './form';
import { ChatList } from './chatslist';
import { Button } from '@material-ui/core';

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
    const [chatList, setChatList] = useState(initialChats);

    const sendMessage = useCallback((message) => {
        setMessageList(prevMessage =>( 
            {...prevMessage, [chatId]: [...prevMessage[chatId], message]}
        ));
    }, [chatId]);

    const addMessage = useCallback((value) => {
        sendMessage({text: value, autor: AUTORS.HUMAN});
    }, [sendMessage]);

    const addChat = () => {
        let newId;
        setChatList(prevChats => { 
            let find;
            const topic = prompt("A topic name of the new chat");
            do {
                newId = `chat-${parseInt(Math.random()*1000)}`;
                // eslint-disable-next-line
                find = chatList.find(el => el.id === newId);
            } while (!!find);
            return [...prevChats, {topic: topic, id: newId}];
        });
        setMessageList((prevMessage) => (
            {...prevMessage, [newId]: []}
        ));
    };

    const delChat = () => {
        setChatList(() => {
            const newList = chatList;
            const find = newList.findIndex(el => el.id === chatId);
            newList.splice(find, 1);
            console.log(newList);
            return newList;
        });
        setMessageList(() => {
            const newList = messageList;
            delete newList[chatId];
            console.log(newList);
            return newList;
        });
    }

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

    if (!!chatId && messageList[chatId] === undefined) return <Redirect to="/chats"/>

    return (
        <div className="App">
            <div className="App-left">
                <Button onClick={addChat} variant="contained" color="primary">Add new chat</Button>
                {!!chatId && <Button onClick={delChat} style={{display: 'block', marginTop: '10px'}} variant="contained" color="primary">Delete current chat</Button>}
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