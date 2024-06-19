import { toast } from "react-toastify";

//create toastify
const createToast = (msg, type = "error") => {
  toast[type](msg);
};

//export default
export default createToast;
