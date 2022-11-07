import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialStateValues,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      console.log(state,action);
      state.count += action.payload
    },
    decrementByAmount: (state, action) => {
      state.count -=action.payload
    },
    resetCount:(state) =>{
      state.count = 0;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount, resetCount} = counterSlice.actions
// export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer



// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const IncrementNumber = createAsyncThunk(
//   "IncrementNumber",
//   async (payload) => {
//     console.log(payload);
//     try {
     
//       const data = payload;
//       return data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// );

// export const DecrementNumber = createAsyncThunk(
//   "DecrementNumber",
//   async (payload) => {
//     try {
//       const data = payload;
//       return data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// );


// // const initialState = {
//   const initialState = {
    
//     count:0,

//   }



// export const counterSlice = createSlice({
//     name: "counter",
//     initialState,
//     reducers: {
//       // increment: (state) => {
//       //   state.count += 1;
//       // },
//       countNumber: (state) => {
//         state.count = 0;
//         },
//       increment: (state) => {
//         state.count = state.count + 1;
        
//       },
//       decrement: (state) => {
//         state.count = state.count - 1;
//       },
      
//     }
//   });