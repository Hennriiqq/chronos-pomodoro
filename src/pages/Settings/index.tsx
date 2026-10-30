import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';

import { MainTemplate } from '../../templates/MainTemplate';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { messageToastify } from '../../adapters/messageToastify';

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakInput = useRef<HTMLInputElement>(null);
  const longBreakInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    messageToastify.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakInput.current?.value);
    const longBreakTime = Number(longBreakInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Digite apenas números para TODOS os campos');
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para foco');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso curto');
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('Digite valores entre 1 e 60 para descanso longo');
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        messageToastify.error(error);
      });
      return;
    }
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
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso curto'
              ref={shortBreakInput}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakInput}
              defaultValue={state.config.longBreakTime}
              type='number'
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
