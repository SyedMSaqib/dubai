import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


type addOns = {
    id: string
    price: number
    name: string
    subTourInfoId: string
  }
export interface peopleModal {
  ride:string,
  addOns:addOns []

}

const initialState: peopleModal = {
  ride:"shared",
  addOns:[]

}

export const peopleModal = createSlice({
  name: 'peopleModal',
  initialState,
  reducers: {
    AddRideType: (state, action: PayloadAction<string>) => {
      state.ride=action.payload
    },
    AddaddOns: (state, action: PayloadAction<addOns[]>) => {
        state.addOns = action.payload; // Replace the state with the new array of add-ons
      }
    }
  });
  

// Action creators
export const { AddRideType, AddaddOns } = peopleModal.actions

export default peopleModal.reducer
