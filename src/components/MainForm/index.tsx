import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';

export function MainForm() {
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
