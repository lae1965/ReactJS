import React, { useEffect, useState } from 'react';
import './App.css';
import {Message} from './Message';

function App() {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');

    const inputChange = (ev) => {
        setValue(ev.target.value);
    };

    const addMessage = () => {
        setMessageList(message => [...message, {text: value, autor: 'Andrey Lashkevich'}]);
    };

    useEffect(() => {
        if (value !== '' && messageList[messageList.length - 1]?.autor === 'Andrey Lashkevich') {
            setValue('');
            setTimeout(() => {
                setMessageList(message => [...message, {text: 'Message received', autor: 'Bot'}]);
            }, 1000);
        }
    }, [messageList]);

    return (
        <div className="App">
            <header className="App-header">
                <input type="text" value={value} onChange={inputChange}></input>
                <button onClick={addMessage}>Add message</button>
                {messageList.map((message, i) => <Message key={i} text={message.text} />)}
            </header>
        </div>
    );
}

export default App;
