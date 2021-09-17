import React from'react';
import { Link } from 'react-router-dom';
import { List,  ListItem } from '@material-ui/core';

export const ChatList = ({chatList}) => {
    return (
        <List>
            {chatList.map(chat => (
                <ListItem 
                    key={chat.id} 
                    className="App-topic">
                        <Link to={`/chats/${chat.id}`}>{chat.topic}</Link>
                </ListItem>
            ))}
        </List>

    )
}