import {useContext} from 'react'
import Button from './Button'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider' // Import AuthContext to manage authentication state

const header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate() // Hook to programmatically navigate

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false) // Update the authentication state
    navigate('/login') // Redirect to the login page after logout
  }
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>

        <div>
          {isLoggedIn ? (
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
          ) : (
            <>
            <Button text='Login' class="btn-outline-info" url="/login" />
            &nbsp;
            <Button text='Register' class="btn-info" url="/register" />
            </>
          )}
        </div>
    </nav>
    </>
  )
}

export default header