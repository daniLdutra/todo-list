import { useState } from 'react';
import { List } from '../List';
import styles from './Task.module.css';

export function Task() {
  const [tasks, setTask] = useState<string[]>([]);
  const [tasksCreated, setTasksCreated] = useState<number>(0);
  const [completedTask, setCompletedTask] = useState<number>(0);

  const handleCreateTask = (event: any) => {
    event.preventDefault();
    const newTask = event.target.newTask.value;

    setTask([...tasks, newTask]);
    setTasksCreated(tasks.length + 1);
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
        return <List task={task} />;
      })}
      <div className={styles.container}>
        <h4>Tarefas criadas: {tasksCreated}</h4>
        <h4>Tarefas concluídas: 0</h4>
      </div>
    </>
  );
}
