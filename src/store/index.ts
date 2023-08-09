import { configureStore } from "@reduxjs/toolkit";
import { gitHubApi } from "./github/github.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { githubReducer } from "./github/github.slice";
import { userReducer } from "./users/users.slice";
import { UsersApi } from "./users/users.api";

export const store = configureStore({
    reducer: {
        [gitHubApi.reducerPath]: gitHubApi.reducer,
        github: githubReducer,
        user: userReducer,
        [UsersApi.reducerPath]: UsersApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gitHubApi.middleware, UsersApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>