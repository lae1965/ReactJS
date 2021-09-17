import React, { useCallback, useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const inputChange = useCallback((ev) => {
        setValue(ev.target.value);
    }, []);

    const inputRef = useRef();

    const addMessage = (ev) => {
        ev.preventDefault();
        if (value !== '') {
            onSubmit(value);
            setValue('');
        }        
        inputRef.current.focus();
    };

    return (
        <form onSubmit={addMessage}>
            <TextField 
                value={value} 
                onChange={inputChange} 
                inputRef={inputRef} 
                placeholder="Input your message"
            />
            <Button 
                type="submit"
                variant="contained" 
                color="primary">Add message
            </Button>
        </form>
    )
}