import { createSlice } from '@reduxjs/toolkit'

export const keySlice = createSlice({
  name: 'key',
  initialState: {
    value: "Beroepstaken",
  },
  reducers: {
    setKey: (state, action) => {
        state.value = action.payload
    }
  },
})

export const { setKey } = keySlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectKey = (state) => state.key.value

export default keySlice.reducer
