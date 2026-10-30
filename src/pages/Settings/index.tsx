import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';

import { MainTemplate } from '../../templates/MainTemplate';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakInput = useRef<HTMLInputElement>(null);
  const longBreakInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('enviou', Date.now());

    const workTime = workTimeInput.current?.value;
    const shortBreakTime = shortBreakInput.current?.value;
    const longBreakTime = longBreakInput.current?.value;

    console.log(shortBreakTime, longBreakTime, workTime);
  }

  return (
    <MainTemplate>
      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para tempo de foco, descanso curso e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimeInput}
              defaultValue={state.config.worktime}
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso curto'
              ref={shortBreakInput}
              defaultValue={state.config.shortBreakTime}
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakInput}
              defaultValue={state.config.longBreakTime}
            />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Salvar configurações'
              title='Salvar configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
