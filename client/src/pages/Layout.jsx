import {Navbar} from '../components/base/index';
import {Outlet} from 'react-router';

function Layout() {
  return (
    <>
    <Outlet/>
    <Navbar/>
    </>
  )
}

export default Layout