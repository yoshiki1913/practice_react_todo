import React from 'react';

function Input({ onAdd }) {
    const [text, setText] = React.useState('');
    const handleChange = e => setText(e.target.value);

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            onAdd(text);
            setText('');
        }
    };

    return (
        <div className="my-6">
            <input
                className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
                type='text'
                placeholder='Enterで追加'
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default Input;