import { IUserData } from "../interfaces"

interface IProps {  
    user:IUserData
}
const UserDetailes = ({user}:IProps) => {
  return (
    <div>
        <h3>email:{user.email}</h3>
        <h3>password:{user.password}</h3>
        <h3>hello</h3>
    </div>
  )
}

export default UserDetailes