import React, { useState } from 'react';
import axios from 'axios';
import DeleteButton from './buttons/DeleteButton';

export default function ToDoList({ taskList, setTaskList }) {

    const handleCheckbox = async (e) => {
        const task = (e.target.id);
        console.log(task)
        try {
            const res = await axios.put('/task');
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
   

      return (
        <table>
          <tbody>
            {taskList.map((task) => (
              <tr key={task._id}>
                <td><input type="checkbox" name="done" id={task._id} onChange={handleCheckbox}/></td>
                <td>{task.taskName}</td>
                <td>{task.timeToComplete}</td>
                <td><DeleteButton>Delete</DeleteButton></td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    