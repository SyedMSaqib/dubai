
import { configureStore } from '@reduxjs/toolkit'
import sidbarReducer from '../Redux/features/sidebarSlice'


export const makeStore = () => {
    return configureStore({
      reducer: {sidebar: sidbarReducer},
    })
  }
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']