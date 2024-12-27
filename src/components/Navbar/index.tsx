import './index.scss'

interface IProps {
    companyName: string;
    isLoggedIn: boolean;
    setIsLoggedIn : (val : boolean)=> void
}

const Navbar = ({companyName, isLoggedIn , setIsLoggedIn}: IProps) => {
  return (
    <nav>
        <ul className='navbar-list'>
            <li>
                <a href="" className='logo'>{companyName}</a>
            </li>
            <li>
               <a href="">home</a>
            </li>
            <li>
                <a href="">about</a>
            </li>
            <li>
                <a href="">contact</a>
            </li>
            <button onClick={()=> setIsLoggedIn(!isLoggedIn)} style={{
                padding:10,
                color:"white",
                backgroundColor:"black"
            }}>
                {isLoggedIn ? "logout":"login"}
            </button>
        </ul>
    </nav>
  )
}

export default Navbar