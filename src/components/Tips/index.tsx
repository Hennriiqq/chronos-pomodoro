import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  // tips
  const tipsForWhenActiveTask = {
    worktime: (
      <span>
        Foque por <b>{state.config.worktime}min </b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime}min </b>
      </span>
    ),
    longBreakTime: (
      <b>
        <span>Descanso longo</span>{' '}
      </b>
    ),
  };

  const tipsForNoActiveTask = {
    worktime: (
      <span>
        Próximo ciclo é <b>{state.config.worktime}min </b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso é de <b>{state.config.shortBreakTime}min </b>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo descanso será <b>longo </b>
      </span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
