import { useEffect, useReducer, useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  type ActionType = {
    type: string;
    payload?: number;
  };

  const [myState, dispatch] = useReducer(
    (state, action: ActionType) => {
      console.log(state, action);

      switch (action.type) {
        case 'Increment': {
          if (!action.payload) return state;
          return {
            ...state,
            secondsRemaing: state.secondsRemaing + action.payload,
          };
        }
        case 'Decrement': {
          if (!action.payload) return state;
          return {
            ...state,
            secondsRemaing: state.secondsRemaing - action.payload,
          };
        }
        case 'Reset': {
          return {
            secondsRemaing: 0,
          };
        }
      }

      return state; //estado atual (nao altera)
    },
    {
      secondsRemaing: 0,
    },
  );

  // useEffect(() => {
  // console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>O estado e: {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({ type: 'Increment', payload: 10 })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: 'Decrement', payload: 10 })}>
        decrementar
      </button>
      <button onClick={() => dispatch({ type: 'Reset' })}>Resetar</button>
    </TaskContext.Provider>
  );
}
