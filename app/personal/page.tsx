'use client';

import { useState, useEffect } from 'react';
import { AddTask } from '../../components/AddTask';
import { TaskList } from '../../components/TaskList';
import type { TaskProps } from "../../components/Task"

function Personal() {
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const fetchTasks = async () => {
        const res = await fetch('/api/tasks');
        const data = await res.json();
        setTasks(data.map((task: any) => ({
            ...task,
            onToggle: () => toggleTask(task.id),
            onDelete: () => deleteTask(task.id)
        })));
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async (text: string) => {
        await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({ text }),
        });
        fetchTasks(); // refresh list
    };

    const toggleTask = async (id: number) => {
        const task = tasks.find(t => t.id === id);
        if (!task) return;

        await fetch('/api/tasks', {
            method: 'PATCH',
            body: JSON.stringify({ id, checked: !task.checked }),
        });

        fetchTasks();
    };

    const deleteTask = async (id: number) => {
        await fetch('/api/tasks', {
            method: 'DELETE',
            body: JSON.stringify({ id }),
        });

        fetchTasks();
    };

    const clearCompleted = async () => {
        const completed = tasks.filter(t => t.checked);
        await Promise.all(
            completed.map((t) =>
                fetch('/api/tasks', {
                    method: 'DELETE',
                    body: JSON.stringify({ id: t.id }),
                })
            )
        );
        fetchTasks();
    };

    return (
        <div>
            <AddTask addTask={addTask} />
            <TaskList
                tasks={tasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                clearCompleted={clearCompleted}
            />
        </div>
    );
}

export default Personal;