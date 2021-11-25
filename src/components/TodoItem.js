import React from 'react';

function TodoItem({ item, onCheck }) {
    const handleChange = () => {
        onCheck(item);
    }

    return (
        <div className="w-full my-3 mx-auto">
            <div className="bg-white m-2 p-2">
            <label>
                <input
                    type='checkbox'
                    checked={item.done}
                    onChange={handleChange}
                    className="m-2 checked:bg-purple-600 checked:border-transparent"
                />
                <span className={item.done ? 'text-purple-600' : ''}>
                    {item.text}
                </span>
            </label>
            </div>
        </div>
    );
}
export default TodoItem;