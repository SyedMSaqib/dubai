
import { configureStore } from '@reduxjs/toolkit'
import sidbarReducer from '../Redux/features/sidebarSlice'
import  formData  from '../Redux/features/contactSlice'
import peopleModal from './features/peopleModal'



export const makeStore = () => {
    return configureStore({
      reducer: {sidebar: sidbarReducer,
        formData:formData,
        peopleModal:peopleModal
      },
    })
  }
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']