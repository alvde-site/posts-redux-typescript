import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Администратор" },
  { id: "1", name: "Александр Викторович" },
  { id: "2", name: "Светлана Анатольевна" },
  { id: "3", name: "Kevin Grant" },
  { id: "4", name: "Madison Price" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
