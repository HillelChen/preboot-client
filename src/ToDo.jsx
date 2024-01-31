import React, { useState } from 'react';
import axios from 'axios';

export default function ToDo() {
    const [taskList, setTaskList] = useState([]);

    const baseUrl = 'http://localhost:2525'
    axios.defaults.baseURL = baseUrl

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

    const user = '65b0d338c61be901b0816dde'
    return (
        <div>
            <h1>What do you have to do?</h1>
            <form onSubmit={(e) => handleSubmit(e, user)}>
                <input type="text" name='taskName' placeholder='Add Task' ></input>
                <br />
                <input type="datetime-local" name="taskDate" ></input>
                <br />
                <button type='submit' >Add</button>
            </form>
        </div>
    )
}

