import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function Layout() {
  return (
    <>
        <NavBar />
        <div className='container'>
            <Outlet />
        </div>
        <footer>
        </footer>
    </>
  )
}

export default Layout