import { configureStore } from "@reduxjs/toolkit";

import userReduce from "./slice";

const store = configureStore({ reducer: { users: userReduce } });

export default store;
