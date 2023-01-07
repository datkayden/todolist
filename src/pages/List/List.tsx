import React, {ReactElement, useState} from "react";

const List = (): ReactElement => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    const subCount = () => {
        const newCount = count - 1;
        setCount(newCount);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Sub</button>
        </div>
    );
};

export default List;