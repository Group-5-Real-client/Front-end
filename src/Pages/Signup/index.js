import { UserProvider } from "../../Component/UserProvider";

import Register from "../../Component/Register/index";
function Signup() {
  return (
    <div className="signin">
      <UserProvider>
        <Register />
      </UserProvider>
    </div>
  );
}
export default Signup;
