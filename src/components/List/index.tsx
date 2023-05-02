import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { ITask } from '../Task';
import styles from './List.module.css';

interface IProps {
  onDeleteTask: (task: ITask) => void;
  task: ITask
}

export function List({ task, onDeleteTask }: IProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckTask = () => {
    setIsChecked(!isChecked);
  };

  const textDecoration = isChecked ? 'line-through' : 'none';

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
              checked={isChecked}
              className={styles.checkbox}
              onChange={handleCheckTask}
            />
            <span
              style={{
                textDecorationLine: isChecked ? 'line-through' : 'none',
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
