import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { List } from '../List';
import styles from './Task.module.css';

export interface ITask {
    id: string;
    task: string;
}

export function Task() {
  const [tasks, setTask] = useState<ITask[]>([]);
  const [tasksCreated, setTasksCreated] = useState(0);
  const [completedTask, setCompletedTask] = useState(0);

  const handleCreateTask = (event: any) => {
    event.preventDefault();
    const newTask = event.target.newTask.value;

    setTask([...tasks, {task: newTask, id: uuidv4()}]);
    setTasksCreated(tasks.length + 1);
  };

  const deleteTask = ({ id }: ITask) => {
    const tasksWithoutTaskOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTask(tasksWithoutTaskOne);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleCreateTask}>
        <input type="text" name="newTask" className={styles.input}></input>
        <button className={styles.button} type="submit">
          Criar
        </button>
      </form>
      {tasks.map((task) => {
        return (
          <List key={task.id} task={task} onDeleteTask={deleteTask} />
        );
      })}
      <div className={styles.container}>
        <h4>Tarefas criadas: {tasksCreated}</h4>
        <h4>Tarefas concluídas: {completedTask}</h4>
      </div>
    </>
  );
}
