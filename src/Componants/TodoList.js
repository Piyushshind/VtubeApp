// src/TodoList.js
import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import './TodoList.css';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const todosCollection = collection(db, 'todos');
        const todoSnapshot = await getDocs(todosCollection);
        const todoList = todoSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTodos(todoList);
    };

    const addTodo = async (e) => {
        e.preventDefault();
        console.log(todos);
        if (input.trim() === '') return;

        await addDoc(collection(db, 'todos'), { text: input, completed: false });
        setInput('');
        fetchTodos();
    };

    const deleteTodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id));
        fetchTodos();
    };

    return (
        <div className="todo-container">
            <div className="todo-header">Todo List</div>
            <div className='todo-body'>
                <form onSubmit={addTodo}>
                    <input
                        className='taskInput'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add a new todo"
                    />
                    <button className='addTaskBtn' type="submit">Add Todo</button>
                </form>
                <ul className='task-list'>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
