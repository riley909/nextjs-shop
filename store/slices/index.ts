import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, CombinedState, combineReducers } from 'redux';
import { UsersAttributes } from '../../interface/users';
import users from './users';

export type IState = {
  users: UsersAttributes;
};

const rootReducer = (state: IState, action: AnyAction): CombinedState<IState> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      return combineReducers({
        users,
      })(state, action);
    }
  }
};

export default rootReducer;
