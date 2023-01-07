import React, {ReactElement, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginSuccess} from "store/userReducer";

const List = (): ReactElement => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const [count, setCount] = useState(0);
    const addCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    const handleLogin = () => {
        const user = {
            name: "thanh dat",
            age: 20
        };
        dispatch(loginSuccess(user));
    };

    // const handleLogout = () => {
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     dispatch(logout());
    // };

    const subCount = () => {
        const newCount = count - 1;
        setCount(newCount);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <p>User: {JSON.stringify(user)}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Sub</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default List;