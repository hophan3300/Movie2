import React from 'react';
import { Layout, Menu} from 'antd';
import {NavLink, useLocation, useHistory} from 'react-router-dom';
import {helper}  from '../../helper/common';

const { Header } = Layout;
const HeaderMovie = ()=>{
   const {pathname} = useLocation();
   const emailUser = helper.getEmailUser()
   const history = useHistory()
   const logoutMovie = () =>{
     helper.removeToken()
     // quay ve trang login
    history.push('/movie/login')
   }
   return(
   <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
            <Menu.Item key="/popular-movies">
              <NavLink to="/popular-movies">Popular movies</NavLink>
            </Menu.Item>
            <Menu.Item key="/search-movies">
               <NavLink to="/search-movies">Search movies</NavLink>
            </Menu.Item>
            { emailUser === null &&
              <Menu.Item key="/movie/login">
                <NavLink to="/movie/login">Login</NavLink>
              </Menu.Item>
            }
            { emailUser !== null && <Menu.Item key="user">{emailUser}</Menu.Item>}
            { emailUser !== null && 
              <Menu.Item key="logout" onClick={()=> logoutMovie()}>Logout</Menu.Item>
            }
      </Menu>
    </Header>
    </Layout>
   )
}
export default React.memo(HeaderMovie)