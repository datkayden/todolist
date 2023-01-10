import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import user from "store/userReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const reducer = combineReducers({
    user
});

const store = configureStore({
    reducer,
});

// export type
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
