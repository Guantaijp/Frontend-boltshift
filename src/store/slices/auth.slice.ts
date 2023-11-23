import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    user : {},
    jwt : null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.jwt = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
    });


export const setUser = authSlice.actions.setUser;
export const setToken = authSlice.actions.setToken;

const AuthSlice = authSlice.reducer;
export default AuthSlice;
