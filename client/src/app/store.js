import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import authReducer from "../features/auth/authSlice";
import btypeReducec from "../features/btypebill/btypeBillSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    btype: btypeReducec,
  },

  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

//export default
export default store;
