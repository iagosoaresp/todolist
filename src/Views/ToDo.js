import '../styles/index.css'
import React from 'react'
import { FaPlusSquare, FaTrash, FaCheck, FaList } from "react-icons/fa";
import { useToDo } from '../Contexts/ToDoContext';
import logo from '../images/logo.png'

export const ToDoList = () => {
    const { listTasks, addTask, task, changeTask, removeTask, completeTask } = useToDo()
    return (
        <>
            <div className='header'>
                <img src={logo} alt="to do list"/>
            </div>
            <div className='container'>
                <div id="card">
                    <div className='addTask'>
                        <input className="form-control focus-input" placeholder='Digite a próxima tarefa' value={task} onChange={(e) => changeTask(e.target.value)} />
                        <FaPlusSquare id="button-add" color='#420C59' fontSize={45} onClick={() => addTask()} />
                    </div>
                    <div className='container-tasks'>
                        {
                            listTasks.length <= 0 ?
                                <div className='container-message'>
                                    <FaList />
                                    <span>Adicione uma tarefa</span>
                                </div>
                                :
                                listTasks.map((task, index) => {
                                    return (
                                        <div className='list-tasks' style={{ backgroundColor: task.complete && "#00ff0047", transition: '1s' }} key={index}>
                                            <button type='checkbox' style={{ backgroundColor: task.complete && "green" }} className='button-checkbox' value={task.complete} onClick={() => completeTask(task.id)}>
                                                <FaCheck color='white' fontSize={10} display={!task.complete && 'none'} />
                                            </button>
                                            <span>{task.task}</span>
                                            <FaTrash id='trash' onClick={() => removeTask(index)} />
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </>


    )

}