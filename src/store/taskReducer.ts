import {TaskItem} from "models/taskModel";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index";

interface TaskState {
    taskList: TaskItem[];
}

const initialState: TaskState = {
    taskList: []
};

const slice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addNewTaskItem: (state, action: PayloadAction<TaskItem>) => {
            state.taskList.push(action.payload);
        },
        removeTaskItem: (state, action: PayloadAction<string>) => {
            state.taskList = state.taskList.filter(item => item.name === action.payload);
        },
        setTaskDone: (state, action: PayloadAction<string>) => {
            state.taskList = state.taskList.map(item => {
                let isDone = item.isDone;
                if (item.name === action.payload) {
                    isDone = true;
                }

                return {
                    ...item,
                    isDone
                };
            });
        },
        setUndoneTask: (state, action: PayloadAction<string>) => {
            state.taskList = state.taskList.map(item => {
                let isDone = item.isDone;
                if (item.name === action.payload) {
                    isDone = false;
                }

                return {
                    ...item,
                    isDone
                };
            });
        }
    }
});

export default slice.reducer;

export const {addNewTaskItem, removeTaskItem, setUndoneTask, setTaskDone} = slice.actions;
export const selectTaskList = (state: RootState) => state.task.taskList;