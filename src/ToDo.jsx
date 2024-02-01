import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoList from './ToDoList';
import DeleteButton from './buttons/DeleteButton';
import AddButton from './buttons/AddButton';
import MarkDone from './buttons/MarkDoneButton';
import MarkNotDone from './buttons/MarkNotDoneButton';

export default function ToDo() {
    const [taskList, setTaskList] = useState([]);

    const baseUrl = 'http://localhost:2525'
    axios.defaults.baseURL = baseUrl



    useEffect(() => {
        axios.get('/').then((res) => {
            console.log(res.data);
            setTaskList(res.data);
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);




    const handleSubmit = async (e, user) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        console.log(fd)
        const newTask = Object.fromEntries(fd);
        newTask.userId = user;
        console.log(newTask);
        try {
            const res = await axios.post('/', newTask);
            const data = res.data;
            console.log(data);

            axios.get('/').then((res) => {
                console.log(res.data);
                setTaskList(res.data);
            }).catch(console.error);

        } catch (err) {
            console.log(err);
        }
    }
    const handleDeleteAll = async () => {
        try {
            const res = await axios.delete('/');
            const data = res.data;
            console.log(data);

            axios.get('/').then((res) => {
                console.log(res.data);
                setTaskList(res.data);
            }).catch(console.error);

        } catch (err) {
            console.log(err);
        }
    }



    const user = '65b0d338c61be901b0816dde'
    return (
        <div>
            <h1>What do you have to do?</h1>
            <ToDoList taskList={taskList} setTaskList={setTaskList} />
            <div className='general-buttons'>
            <DeleteButton handleDeleteAll={handleDeleteAll} >Delete All</DeleteButton>
            <MarkDone/>
            <MarkNotDone/>
                
            </div>
            <form onSubmit={(e) => handleSubmit(e, user)}>
                <input type="text" name='taskName' placeholder='Add Task' />
                <input type="datetime-local" name="taskDate" ></input>
                <AddButton/>    
            </form>
        </div>
    )
}

