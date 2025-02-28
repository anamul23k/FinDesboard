import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { name: "Test1", imgUrl: "/Frame1.svg", designation: "CEO" },
    { name: "Test2", imgUrl: "/Frame1.svg", designation: "Manager" },
    { name: "Test3", imgUrl: "/Frame1.svg", designation: "Finance" },
    { name: "Test4", imgUrl: "/Frame1.svg", designation: "Admin" },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
});
export default userSlice.reducer;
