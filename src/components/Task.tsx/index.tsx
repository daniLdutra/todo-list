import styles from './Task.module.css';

export function Task() {
  return (
    <>
      <form className={styles.form}>
        <input className={styles.input}></input>
        <button className={styles.button}>Criar</button>
      </form>
    </>
  );
}
