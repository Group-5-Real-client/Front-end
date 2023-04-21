
import Register, { UserProvider } from '../../Component/Register/index'


function Signin(){
    return(
        <div className="signin">
            <UserProvider>
        <Register/>
        </UserProvider>
        </div>
    )
}
export default Signin