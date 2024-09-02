import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/actions';

// global state data (store)
export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, { incrementBy }) => state + incrementBy),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
