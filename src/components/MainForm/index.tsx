import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');

  function handleCreatNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('deu certo pivete');
  }

  return (
    <form onSubmit={handleCreatNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite Algo'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
      </div>

      <div className='FormRow'>
        <p>Próximo intervalo é de 25 min. </p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
