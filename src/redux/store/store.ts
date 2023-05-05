import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "@/redux/slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
