import React, {useState} from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState("");

    const addTask = () => {
        if (newTaskText.trim()) {
            setTasks([...tasks, {id: Date.now(), text: newTaskText}]);
            setNewTaskText("");
        }else{
            alert("Todo can't be empty!")
        }
    };

    const toggleTask = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return {...task, completed: !task.completed};
            }
            return task;
        });
        setTasks(newTasks);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
            />
            <button onClick={addTask}>Add Todo</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(index)}
                        />
                        <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                                    {task.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;