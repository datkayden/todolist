import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import {useAppDispatch} from "store";

const List = () => {
    const dispatch = useAppDispatch();
    return (
        <Container fluid="sm">
            <ListGroup>
                <ListGroup.Item>Todo 1</ListGroup.Item>
                <ListGroup.Item>Todo 2</ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default List;