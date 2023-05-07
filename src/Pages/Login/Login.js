import Signin from "../../Component/Signin/index.js";
import { UserProvider } from "../../Component/UserProvider";

function Login() {
  return (
    <div>
      <UserProvider>
        <Signin />
      </UserProvider>
    </div>
  );
}
export default Login;
