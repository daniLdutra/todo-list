import styles from './List.module.css';

interface IList {
  task: string;
}

export function List({ task }: IList) {
  return (
    <>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <label htmlFor="checkbox1" className={styles.label}>
            <input type="checkbox" id="checkbox1" className={styles.checkbox} />
            <span className={styles.taskText}>{task}</span>
          </label>
        </li>
      </ul>
    </>
  );
}
