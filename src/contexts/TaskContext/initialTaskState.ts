import type { TaskStateModel } from '../../models/taskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    worktime: 1,
    shortBreakTime: 1,
    longBreakTime: 1,
  },
};
