import { useEffect } from 'react'
import HeaderP from '../components/dashboard/headerPersonal'
import Scroll from '../components/scrollToTop'
import {Outlet, useLocation} from 'react-router'

function AuthLayoutP() {

    const { pathname } = useLocation()
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

  return (
    <div>
        <Outlet/>
        <HeaderP/>
        <Scroll/>
    </div>
  )
}

export default AuthLayoutP
