import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { Message } from './Message';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');
    const [chatList] = useState([
        {
            topic: 'Microcontroller AtMega-8',
            id: 'id1'
        },
        {
            topic: 'Microcontroller Pic16f84a',
            id: 'id2'
        },
        {
            topic: 'Microcontroller SAK-XC161CJ-16F40F',
            id: 'id3'
        },
        {
            topic: 'Microcontroller STM32F103',
            id: 'id4'
        }
    ]);

    const inputChange = (ev) => {
        setValue(ev.target.value);
    };

    const addMessage = () => {
        setMessageList(message => [...message, {text: value, autor: 'Andrey Lashkevich'}]);
    };

    const inputRef = useRef();

    useEffect(() => {
        if (value !== '' && messageList[messageList.length - 1]?.autor === 'Andrey Lashkevich') {
            setValue('');
            setTimeout(() => {
                setMessageList(message => [...message, {text: 'Message received', autor: 'Bot'}]);
                inputRef.current.focus();
            }, 1000);
        } else inputRef.current.focus();
    }, [messageList, value]);

    return (
        <div className="App">
            <div className="App-left">
                <h2 className="App-heading">List of chats</h2>
                <ul>
                    {chatList.map((chat) => <li key={chat.id} className="App-topic">{chat.topic}</li>)}
                </ul>
            </div>
            <header className="App-header">
                <TextField value={value} onChange={inputChange} inputRef={inputRef} placeholder="Input your message"/>
                <Button onClick={addMessage} variant="contained" color="primary">Add message</Button>
                {messageList.map((message, i) => <Message key={i} text={message.text} />)}
            </header>
        </div>
    );
}

export default App;
