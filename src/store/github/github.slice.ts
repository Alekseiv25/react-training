import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IRepo } from "../../models/models"

const FAV_KEY = 'rfk'

interface GithubState {
    favourites: IRepo[]
}

const initialState: GithubState = {
    favourites: JSON.parse(localStorage.getItem(FAV_KEY) ?? '[]')
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<IRepo>) {
            state.favourites.push(action.payload)
            localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFavourite(state, action: PayloadAction<IRepo>) {
            state.favourites = state.favourites.filter(f => f.id !== action.payload.id)
            localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites))
        }
    }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer