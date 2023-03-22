import { useState } from 'react';
import { List } from '../List';
import styles from './Task.module.css';

export function Task() {
  const [tasks, setTask] = useState<string[]>([]);

  const handleCreateTask = (event: any) => {
    event.preventDefault();
    const newTask = event.target.newTask.value;

    setTask([...tasks, newTask]);
    console.log(newTask);
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
    </>
  );
}
