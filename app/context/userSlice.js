import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    session: null,
    data: {}
  },
  reducers: {
    LoginUser: state => {
        state.session = true;
        state.data = {
          username: "Arghya Mondal"
        }
    },
    LogoutUser: state => {
        state.session = false;
        state.data = {}
    },
  }
})

// Action creators are generated for each case reducer function
export const { LoginUser, LogoutUser } = userSlice.actions

export default userSlice.reducer