import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersAttributes } from '../../interface/users';

const initialState: UsersAttributes = {
  isLoggedIn: false,
  username: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  // 리듀서 맵. key는 액션 타입 문자열이 되고(ex. todos/addTodo), 함수는 액션이 dispatch 될 때 실행되는 reducer
  reducers: {},
});

const { actions, reducer } = usersSlice;

export default reducer;
