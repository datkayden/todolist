import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "dat",
            age: 27
        }
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
        },
        logoutSuccess: (state) => {
            state.user = {
                name: "",
                age: 0
            };
        }
    }
});

export default slice.reducer;

export const {logoutSuccess, loginSuccess} = slice.actions;

const login = (name: string, age: number) => (dispatch: any) => {
    dispatch(loginSuccess({
        payload: {
            name,
            age
        }
    }));
};

const logout = () => (dispatch: any) => {
    dispatch(logoutSuccess());
};

export {
    login,
    logout
};