import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm';
import UserDetailes from './components/UserDetailes';

function App() {
  const company = "MoSafi";
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const [userData , setUserData] = useState({
    email : "",
    password : "",
}) 

   return (
    <>
      <Navbar companyName={company} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      {
          isLoggedIn ? 
          <UserDetailes user={userData} />
          :
          <LoginForm setIsLoggedIn={setIsLoggedIn} userData={userData} setUserData={setUserData} />
      }
    </>
  )
}

export default App
