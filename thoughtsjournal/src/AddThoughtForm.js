import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
    const [text, setText] = useState('');

    const handleTextChange = (event) => 
    {
        const { value } = event.target;
        setText(value);
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();

        if(text.length <= 0) return;

        const newThought = { id: generateId(), text: text, expiresAt: getNewExpirationTime() };
        console.log(`ID: ${newThought.id}. text: ${newThought.text}, expiresAt: ${newThought.expiresAt}`);
        props.addThought(newThought);
    }

    return (
        <form className="AddThoughtForm" onSubmit={handleSubmit}>
        <input
            type="text"
            aria-label="What's on your mind?"
            placeholder="What's on your mind?"
            value={text}
            onChange={handleTextChange}
        />
        <input type="submit" value="Add"/>
        </form>
    );
}
