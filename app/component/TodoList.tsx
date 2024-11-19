'use client'
import { useState } from 'react'

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputvalue, setinputvalue] = useState("");

    const addTodo = () => {
        if (inputvalue.trim() === "") return;
        setTodos([
            ...todos,
            { id: Date.now(), text: inputvalue, completed: false },
        ]);

        setinputvalue("");
    }

    //add values
    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }
    //delete todo list

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div className='flex flex-col min-h-screen'>
            <header className="bg-blue-500 text-white py-4">
                <div className='max-w-4xl mx-auto text-center'>
                    <h1 className='text-4xl font-serif font-bold'>TodoList by Nabeera</h1>
                    <p className=' text-2xl font-thin mt-2 text-gray-200'>Organize your work with our NextJs Todo List App</p>
                </div>
            </header>


            <main className='flex-grow flex flex items-center justify-center'>
                <div className='max-w-md mx-auto p-4 bg-slate-400 rounded-lg shadow-md'>
                    <div className='mb-4'>
                        <div>
                            <input
                                type="text"
                                value={inputvalue}
                                onChange={(e) => setinputvalue(e.target.value)}
                                className='flex-grow p-2 border border-grey-400 rounded-lg'
                                placeholder='Add a next task...'
                            />
                            <button
                                onClick={addTodo}
                                className='ml-2 px-4 py-4 bg-pink-700 text-white rounded-lg hover:bg-pink-500'>
                                Add
                            </button>
                        </div>
                    </div>


                    <ul className='space-y-2'>
                        {todos.map((todo) => (
                            <li key={todo.id}
                                className={`flex items-center justify-between p-2 border border-slate-800 rounded-lg ${todo.completed ? "bg-gray-200 line-through" : "bg-gray-300"
                                    }`}
                            >
                                <span>{todo.text}</span>

                                <div>
                                    <button
                                    onClick={() => toggleTodo(todo.id)}
                                    className='px-2 py-1 text-sm text-red-600 bg-sky-500 rounded-lg hover:bg-sky-300'>
                                        {todo.completed ? "undo" : "completed"}
                                    </button>

                                    <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className='px-2 py-1 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-300 '>
                                        Delete
                                    </button>
                                    
                                    </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default TodoList;