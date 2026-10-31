import styles from './Styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink target='_blank' href='https://github.com/Hennriiqq'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito por HENRIQUE
        💜
      </RouterLink>
    </footer>
  );
}
