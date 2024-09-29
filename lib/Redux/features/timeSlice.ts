import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TimeSlice {
  value: string[]
}

const initialState: TimeSlice = {
  value: [],
}

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    AddTime: (state, action: PayloadAction<string>) => {
      // Add the new time string to the state value array
      state.value.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { AddTime } = timeSlice.actions

export default timeSlice.reducer
