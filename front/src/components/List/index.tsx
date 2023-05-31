import { Trash } from 'phosphor-react';
import { ITask } from '../Task';
import styles from './List.module.css';

interface IProps {
  onDeleteTask: (task: ITask) => void;
  task: ITask;
  onCompleted: (id: ITask) => void;
}

export function List({ task, onDeleteTask, onCompleted }: IProps) {
  const handleCheckTask = () => {
    onCompleted(task);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task);
  };

  return (
    <>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <label htmlFor="checkbox1" className={styles.label}>
            <input
              type="checkbox"
              id="checkbox1"
              checked={task.isCompleted}
              className={styles.checkbox}
              onChange={handleCheckTask}
            />
            <span
              style={{
                textDecorationLine: task.isCompleted ? 'line-through' : 'none',
                color: 'black',
              }}
            >
              {task.taskName}
            </span>
            <button
              title="Deletar Task"
              className={styles.button}
              onClick={handleDeleteTask}
            >
              <Trash size={20} />
            </button>
          </label>
        </li>
      </ul>
    </>
  );
}
