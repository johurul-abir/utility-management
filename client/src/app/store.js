import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import authReducer from "../features/auth/authSlice";
import btypeReducec from "../features/btypebill/btypeBillSlice";
import paymentReducer from "../features/payment/paymentSlice";
import noticeReducer from "../features/notice/noticeSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    btype: btypeReducec,
    payment: paymentReducer,
    notice: noticeReducer,
  },

  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

//export default
export default store;
