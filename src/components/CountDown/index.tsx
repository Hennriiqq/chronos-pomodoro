import { useTaskContext } from '../../contexts/TaskContext';
import styles from './Styles.module.css';

export function CountDown() {
  const TaskContext = useTaskContext();
  console.log(TaskContext);

  return <div className={styles.container}>00:00</div>;
}
