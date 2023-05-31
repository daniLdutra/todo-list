import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { List } from '../List';
import styles from './Task.module.css';
import axios from 'axios';

export interface ITask {
  id: string;
  taskName: string;
  isCompleted: boolean;
}

export function Task() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleCreateTask = async (event: any) => {
    event.preventDefault();

    const createTask = await axios.post('http://localhost:3001/todo', {
      newTask,
    });

    setTasks(createTask.data);
    setNewTask('');
  };

  const handleNewTask = (event: any) => {
    setNewTask(event.target.value);
  };

  const handleTaskCompletion = async ({ id }: ITask) => {
    const taskCompleted =  await axios.put(`http://localhost:3001/todo/${id}`)
    
    setTasks(taskCompleted.data);
  };

  const deleteTask = async ({ id }: ITask) => {
    const tasksWithoutTaskOne = await axios.delete(`http://localhost:3001/todo/${id}`);

    setTasks(tasksWithoutTaskOne.data);
  };

  useEffect(() => {
    const getTodos = async () => {
     const todos = await axios.get('http://localhost:3001/todos');
     setTasks(todos.data) 
    };
    getTodos()
  }, []);

  return (
    <>
      <form className={styles.form} onSubmit={handleCreateTask}>
        <input
          type="text"
          value={newTask}
          onChange={handleNewTask}
          className={styles.input}
        ></input>
        <button className={styles.button} type="submit">
          Criar
        </button>
      </form>
      <div className={styles.container}>
        <h4>Tarefas criadas: {tasks.length}</h4>
        <h4>
          Tarefas concluídas: {tasks.filter((task) => task.isCompleted).length}{' '}
          de {tasks.length}
        </h4>
      </div>
      {tasks.map((task) => {
        return (
          <List
            key={task.id}
            task={task}
            onDeleteTask={deleteTask}
            onCompleted={handleTaskCompletion}
          />
        );
      })}
    </>
  );
}
