import {createAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index";

interface UserState {
    count: number;
    isLoading: boolean;
}

const initialState: UserState = {
    count: 0,
    isLoading: false
};

export const getAsyncCount = createAsyncThunk("user/fetchById", async (userId: number): Promise<number> => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return 10;
});

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        increase: state => {
            state.count += 1;
        },
        decrease: state => {
            state.count -= 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
        decreaseByAmountReducer: (state, action: PayloadAction<number>) => {
            state.count -= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAsyncCount.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAsyncCount.fulfilled, (state, action: PayloadAction<number>) => {
            state.isLoading = false;
            state.count += action.payload;
        });
    }
});

export default slice.reducer;

export const {increase, decrease, increaseByAmount} = slice.actions;

export const decreaseByAmount = createAction<number>("user/decreaseByAmountReducer");

export const selectCount = (state: RootState) => state.user.count;
export const selectIsLoading = (state: RootState) => state.user.isLoading;