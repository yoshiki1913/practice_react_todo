import React from 'react'
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

function Todo() {
    const getKey = () => Math.random().toString(32).substring(2);
    const [items, setItems] = React.useState([]);
    const [filter, setFilter] = React.useState('ALL');

    const handleCheck = checked => {
        const newItems = items.map(item => {
            if (item.key === checked.key) {
                item.done = !item.done;
            }
            return item;
        });
        setItems(newItems);
    }

    const handleAdd = text => {
        setItems([...items, {key: getKey(), text, done: false}]);
    }

    const handleFilterChange = value => setFilter(value);

    const displayItems = items.filter(item => {
        if (filter === 'ALL') return true;
        if (filter === 'TODO') return !item.done;
        if (filter === 'DONE') return item.done;
    })

    return (
        <div>
                <Input onAdd={handleAdd} />
                <Filter
                    onChange={handleFilterChange}
                    value={filter}
                />
            <div className="grid grid-cols-5 grid-rows-3">
                {displayItems.map(item => (
                    <TodoItem
                        key={item.text}
                        item={item}
                        onCheck={handleCheck}
                    />
                ))}
            </div>
            <div>
                {displayItems.length} タスク
            </div>
        </div>
    );
}

export default Todo;