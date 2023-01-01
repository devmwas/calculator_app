import { configureStore } from "@reduxjs/toolkit";
import workspaceReducer from "../features/workspace/workspaceSlice";

const store = configureStore({
    reducer: {
        workspace: workspaceReducer
    }
})

export default store