// redux/store.js
import { useDispatch } from 'react-redux';
import userReducer from './slices/userSlice'
import projectReducer from './slices/projectSlice'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
    user: userReducer,
    projects: projectReducer,
  }
})
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']