import { ChangeEvent } from 'react'
import './index.scss'
import { IUserData } from '../../interfaces';
import { formInputList } from '../../data';



interface IProps {
    setIsLoggedIn : (val : boolean)=> void;
    userData : IUserData;
    setUserData : (user : IUserData)=> void;
}

const LoginForm = ({setIsLoggedIn , userData , setUserData}:IProps) => {
    // handlers
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=>{
        const {value, name} = event.target;
        setUserData({
            ...userData,
            [name]: value,
        })
    }
    // render
    const renderFormInputList = formInputList.map((input, idx)=><div className='input-wrapper'  key={idx}>
        <label htmlFor={input.label}>Email:</label>
        <input type={input.type} name={input.name} id={input.id} value={userData[input.name]} onChange={onChangeHandler} />
    </div>)

  return (
    <form onSubmit={(e)=> e.preventDefault()} className='login-form'>
        {renderFormInputList}
        <button onClick={()=> setIsLoggedIn(true)} style={{
                padding:5,
                color:"white",
                backgroundColor:"black"
            }}>
                login
            </button>
    </form>
  )
}

export default LoginForm