import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/TaskActions';
import { Tips } from '../Tips';
import { messageToastify } from '../../adapters/messageToastify';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreatNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    messageToastify.dismiss();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      messageToastify.warn('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };
    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
    messageToastify.success('Tarefa Iniciada');
  }

  function handleInterruptTask() {
    messageToastify.dismiss();
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
    messageToastify.error('Tarefa interrompida');
  }

  return (
    <form onSubmit={handleCreatNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='O que você vai fazer?'
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className='FormRow'>
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask ? (
          <DefaultButton
            aria-label='Iniciar nova Tarefa'
            title='iniciar nova Tarefa'
            type='submit'
            color='green'
            icon={<PlayCircleIcon />}
            key={'enviar'}
          />
        ) : (
          <DefaultButton
            aria-label='Interroper tarefa Atual'
            title='Interroper tarefa Atual'
            type='button'
            color='red'
            icon={<PlayCircleIcon />}
            onClick={handleInterruptTask}
            key={'interromper'}
          />
        )}
      </div>
    </form>
  );
}
