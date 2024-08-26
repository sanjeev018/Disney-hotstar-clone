import { configureStore } from "@reduxjs/toolkit";

// rtk
import { setupListeners } from "@reduxjs/toolkit/query";
import { ActionsApi } from "./services/ActionsService";

export const store = configureStore({
  reducer: {
    [ActionsApi.reducerPath]: ActionsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ActionsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
