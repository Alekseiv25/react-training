import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/models";

interface UserState {
    users: IUser[]
    isLoading: boolean
    error: string,
    count: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload
        }
    }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions