import { createSlice } from '@reduxjs/toolkit'
import apiSlice from './api.slice'

interface User {
  email: string
  name: string
  role: string
}

type UserIntialState = {
  user: User
}

const initialState: UserIntialState = {
  user: {
    email: '',
    name: '',
    role: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuth: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
})

export const { updateAuth } = authSlice.actions

export default authSlice.reducer

// export const userApiSlice = exodusApiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     PostLoginUser: builder.mutation({
//       query: (args) => ({
//         url: "/api/users/adminlogin",
//         method: "POST",
//         body: args,
//       }),
//     }),
//     GetAllUsers: builder.mutation({
//       query: (args) => ({
//         url: "/api/users/allusers",
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${args.token}`,
//         },
//       }),
//     }),
//     PostDeleteUsers: builder.mutation({
//       query: (args) => ({
//         url: "/api/users/allusers",
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${args.token}`,
//         },
//         body: args,
//       }),
//     }),
//     PutDeactivatedAccount: builder.mutation({
//       query: (args) => ({
//         url: `/api/users/allusers?appId=${args.appId}`,
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${args.token}`,
//         },
//       }),
//     }),
//   }),
// });

// export const {
//   usePostLoginUserMutation,
//   useGetAllUsersMutation,
//   usePostDeleteUsersMutation,
//   usePutDeactivatedAccountMutation,
// } = userApiSlice;
