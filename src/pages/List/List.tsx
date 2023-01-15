import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useAppDispatch, useAppSelector} from "store";
import {addNewTaskItem, selectTaskList} from "store/taskReducer";
import {TaskItem} from "models/taskModel";

const List = () => {
    const dispatch = useAppDispatch();
    const taskList = useAppSelector(selectTaskList);
    const [taskName, setTaskName] = useState<string>("");

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTaskName(e.currentTarget.value);
    };

    const handleAddNewItem = (): void => {
        const newItem: TaskItem = {
            name: taskName,
            isDone: false
        };
        dispatch(addNewTaskItem(newItem));
        setTaskName("");
    };

    const isTaskNameValid: boolean = taskName.length > 0;

    return (
        <Container fluid="sm">
            <ListGroup>
                {taskList.map(taskItem => (
                    <ListGroup.Item key={taskItem.name}>{taskItem.name}</ListGroup.Item>
                ))}
            </ListGroup>
            <div>
                <Form.Control value={taskName} onChange={handleOnChange} type="text" placeholder="Enter task name"/>
                <Button disabled={!isTaskNameValid} onClick={handleAddNewItem} type="submit">Add new Item</Button>
            </div>
        </Container>
    );
};

export default List;