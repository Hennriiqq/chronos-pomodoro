import type { TaskStateModel } from '../../models/taskStateModel';
import { TaskActionTypes, type TaskActionModel } from './TaskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      return state;
    }
  }
  return state;
}
