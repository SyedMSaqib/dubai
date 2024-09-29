import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SidebarState {
  time: string[]
  duration: number[] // Example type, adjust as needed
  price: [number, number] 
  ratings: number
}

const initialState: SidebarState = {
  time: [],
  duration: [],
  price: [0,0],
  ratings:0

}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    AddTime: (state, action: PayloadAction<string>) => {
      if (!state.time.includes(action.payload)) {
        state.time = [...state.time, action.payload]
      } else {
        state.time = state.time.filter((item) => item !== action.payload)
      }
    },
    AddDuration: (state, action: PayloadAction<number>) => {
        if (!state.duration.includes(action.payload)) {
            state.duration = [...state.duration, action.payload]
          } else {
            state.duration = state.duration.filter((item) => item !== action.payload)
          }
    },
    AddPrice: (state, action: PayloadAction<[number, number]>) => {
      state.price = action.payload  // Update the price range with min and max values
    },
    AddRatings: (state, action: PayloadAction<number>) => {
      state.ratings = action.payload 
    },
  }
})

// Action creators
export const { AddTime, AddDuration, AddPrice,AddRatings } = sidebarSlice.actions

export default sidebarSlice.reducer
