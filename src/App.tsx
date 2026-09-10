import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit
        consequuntur repellat assumenda dolorum soluta magni cumque voluptatum!
        Veritatis quidem accusamus ea rerum aspernatur dignissimos quasi
        explicabo, natus reiciendis iure?
      </p>
    </>
  );
}
