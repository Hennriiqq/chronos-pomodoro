import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/Home';
import { useState } from 'react';
import type { TaskStateModel } from './models/taskStateModel';
import { TaskContextProvider } from './contexts/TaskContext';

const initilState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    worktime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initilState);

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
