import {Header, Footer} from '../components/base/index';
import {Outlet} from 'react-router';

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout