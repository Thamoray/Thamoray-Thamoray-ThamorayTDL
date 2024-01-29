import React, { useState } from 'react'

interface item {
    id: number;
    text: string;
    completed: boolean;

}

export const TodoList: React.FC = () => {
    const [todos, setTods] = useState<item[]>([
        { id: 1, text: "Buy groceries", completed: false },
        { id: 2, text: "Take a nape", completed: false },

    ])
    const [input, setInput] = useState<string>("")
    const handleToggle = (id: number) => {

        setTods(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        })
        );
    }

    const handleClick = () => {
        const newTodo: item = { id: Date.now(), text: input, completed: false };
        setTods([...todos, newTodo]);
    }
    const handleRemove = () => {
        setTods([]);
    }
    return <div className='main-container'>
        <h1>To Do List</h1>
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text} </li>
                ))}
        </ul>
        <input type='text' placeholder='Add todo item' onChange={(e) => setInput(e.currentTarget.value)} />
        <button onClick={handleClick}>Add</button>
        <button onClick={handleRemove}>Clear</button>

    </div>;


}

