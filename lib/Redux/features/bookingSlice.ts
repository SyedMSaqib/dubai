import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AddOn = {
  id: string
  name: string
  price: number
  subTourInfoId: string
  quantity: number
}

type Booking = {
  adults: number
  child: number
  transportType: string
  totalPrice: number
  addOns: AddOn[]
  subTourId: string
  subtourThumbnail: string
  subTourName: string
  packagePrice: number
}

export type BookingData = {
  Data: Booking[]
  date: string
}

// Define the initial state
const initialState: BookingData = {
  Data: [],
  date: '',
};

// Create the slice
const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<BookingData>) => {
      // Set the booking data with the incoming payload
      state.Data = action.payload.Data;
      state.date = action.payload.date;
     
    },
  },
});

// Export actions
export const { addData } = bookingSlice.actions;

// Export the reducer
export default bookingSlice.reducer;
