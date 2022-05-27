import { createSlice } from "@reduxjs/toolkit"

export const breakpointSlice = createSlice({
  name: "breakpoint",
  initialState: {
    value: false,
  },
  reducers: {
    setBreakpoint: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { setBreakpoint } = breakpointSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectBreakpoint = (state) => state.breakpoint.value

export default breakpointSlice.reducer
