import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";



export default configureStore({
    reducer: {
        blog: blogSlice
    }
})

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore['dispatch']