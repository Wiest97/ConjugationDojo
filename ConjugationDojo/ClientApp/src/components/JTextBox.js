import React, { useState } from 'react'
import { toKana } from 'wanakana'

export const JTextBox = (props) => {
    const [text, setText] = useState('');
    const handleUpdate= (event) => {
        setText(toKana(event.target.value))
    }
    return (
        <div>
            <p>{text}</p>
            <input value={text} onChange={handleUpdate} />
        </div>

        )
}
