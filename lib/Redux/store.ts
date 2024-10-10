
import { configureStore } from '@reduxjs/toolkit'
import  formData  from '../Redux/features/contactSlice'
import peopleModal from './features/peopleModal'
import booking from './features/bookingSlice'



export const makeStore = () => {
    return configureStore({
      reducer: {
        formData:formData,
        peopleModal:peopleModal,
        booking:booking
      },
    })
  }
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']