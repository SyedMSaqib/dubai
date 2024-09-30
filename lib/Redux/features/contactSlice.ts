import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    area: string;
    roomOrApartment: string;
}

export interface constactSlice {
    formData: FormData,
    formState: string[],
    isContactFormValid: boolean,
    setCurrentPage:string
}

const initialState: constactSlice = {
    formData:{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        area: "",
        roomOrApartment: "",
    },
    formState:["Contact Form"],
    isContactFormValid: false, 
    setCurrentPage:"Contact Details"
}

export const formData = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    AddData: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload,
      state.isContactFormValid = true;
    },
    setFormState:(state, action:PayloadAction<string>)=>{
        if(!state.formState.includes(action.payload))
        state.formState=[...state.formState,action.payload]
    },
    setCurrentPage:(state, action:PayloadAction<string>)=>{
        
        state.setCurrentPage=action.payload
    }
  }
})

// Action creators
export const { AddData,setFormState,setCurrentPage } = formData.actions

export default formData.reducer
