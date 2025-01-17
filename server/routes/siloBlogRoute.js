import { adminLogin } from "../controllers/siloBlogController.js";

const siloBlogRoute = async (app, opts) => {
    app.post('/admin_login', adminLogin);
  
  };
  
  export default siloBlogRoute;