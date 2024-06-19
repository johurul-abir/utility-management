import { createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";

//create router
const router = createBrowserRouter([...PublicRouter, ...PrivateRouter]);

//export default router
export default router;
