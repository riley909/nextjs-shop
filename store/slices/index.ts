import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, CombinedState, combineReducers } from 'redux';

export type IState = {};

const rootReducer = (state: IState, action: AnyAction): CombinedState<IState> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      return combineReducers({
        // 리듀서 모듈(slice) 추가
      })(state, action);
    }
  }
};

export default rootReducer;
