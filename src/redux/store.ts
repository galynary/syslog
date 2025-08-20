import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
//import counterReducer from "./slices/counterSlice"; // приклад слайсу
const dummyReducer = (state = {}, action: any) => {
  return state;
};

export const store = configureStore({
  reducer: dummyReducer,
});

// Тип для TypeScript (dispatch)
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
