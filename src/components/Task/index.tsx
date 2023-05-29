import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { List } from '../List';
import styles from './Task.module.css';

export interface ITask {
  id: string;
  taskName: string;
  isCompleted: boolean;
}

export function Task() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleCreateTask = (event: any) => {
    event.preventDefault();

    setTasks([
      ...tasks,
      { id: uuidv4(), isCompleted: false, taskName: newTask },
    ]);
    setNewTask('');
  };

  const handleNewTask = (event: any) => {
    setNewTask(event.target.value);
  };

  const handleTaskCompletion = ({ id }: ITask) => {
    const taskCompleted = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(taskCompleted);
  };

  const deleteTask = ({ id }: ITask) => {
    const tasksWithoutTaskOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksWithoutTaskOne);
  };

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
      <div className={styles.container}>
        <h4>Tarefas criadas: {tasks.length}</h4>
        <h4>
          Tarefas concluídas: {tasks.filter((task) => task.isCompleted).length}{' '}
          de {tasks.length}
        </h4>
      </div>
    </>
  );
}
