import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useAppDispatch, useAppSelector} from "store";
import {
    decrease,
    decreaseByAmount,
    getAsyncCount,
    increase,
    increaseByAmount,
    selectCount,
    selectIsLoading
} from "store/userReducer";

const List = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);
    const isLoading = useAppSelector(selectIsLoading);
    const handleIncrease = () => {
        dispatch(increase());
    };

    const handleDecrease = () => {
        dispatch(decrease());
    };

    const handleIncreaseAmount = () => {
        dispatch(increaseByAmount(2));
    };

    const handleDecreaseAmount = () => {
        dispatch(decreaseByAmount(3));
    };

    const handleFetchUserId = () => {
        dispatch(getAsyncCount(3));
    };

    return (
        <div>
            <h2>Counter App</h2>
            <div>Count: {count}</div>
            <div>isLoading: {isLoading.toString()}</div>
            <button onClick={handleIncrease}>
                Increase
            </button>
            <button onClick={handleDecrease}>
                Decrease
            </button>
            <button onClick={handleIncreaseAmount}>
                Increase 2
            </button>
            <button onClick={handleDecreaseAmount}>
                Decrease 3
            </button>
            <button onClick={handleFetchUserId}>
                Increase Async 10
            </button>
        </div>
    );
};

export default List;