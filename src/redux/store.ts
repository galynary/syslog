import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
//import counterReducer from "./slices/counterSlice"; // приклад слайсу

export const store = configureStore({
  reducer: {
    // counter: counterReducer, // додай сюди свої редюсери
  },
});

// Тип для TypeScript (dispatch)
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// Тип для TypeScript (state)
export type RootState = ReturnType<typeof store.getState>;
