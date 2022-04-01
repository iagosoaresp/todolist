import React, { createContext, useContext, useState } from 'react'

export const ToDoContext = createContext()

export const ToDoProvider = ({ children }) => {
    const [listTasks, setListTasks] = useState([])
    const [task, setTask] = useState("")

    const addTask = async () => {
        if (task !== "") {
            const toDo = await {
                task: task,
                complete: false,
                id: listTasks.length + 1
            }
            await setTask("")
            await setListTasks([toDo, ...listTasks])
        }
    }

    const changeTask = async (toDo) => {
        await setTask(toDo)
    }

    const removeTask = async (key) => {
        const remove = await listTasks.filter((task, index) => index === key ? null : task)
        await setListTasks(remove)
    }

    const completeTask = async (id) => {
        const complete = await listTasks.map((task) => task.id === id ? { ...task, complete: !task.complete } : { ...task })

        complete.sort(function (a, b) {
            return (a.complete > b.complete) ? 1 : ((b.complete > a.complete) ? -1 : 0);
        })

        await setListTasks(complete)
    }

    return (
        <ToDoContext.Provider value={{ listTasks, setListTasks, addTask, task, changeTask, removeTask, completeTask }}>
            {children}
        </ToDoContext.Provider>
    );
}

export function useToDo() {
    const context = useContext(ToDoContext)

    return context
}