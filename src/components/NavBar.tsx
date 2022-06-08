import React from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../routes";
import {useTypesSelector} from "../hooks/useTypesSelector";
import {UseActions} from "../hooks/useActions";

const NavBar = () => {

  const navigate = useNavigate()
  const {logout} = UseActions()
  const {isAuth, user} = useTypesSelector(state => state.auth)

  const menuItems = [
    {
      label: (
        <div onClick={() => navigate(RouteNames.LOGIN)}>
          Login
        </div>
      ),
      key: 'Login'
    }
  ]

  const menuItemsAuth = [
    {
      label: (
        <div onClick={() => {
          logout()
        }}>
          Logout
        </div>
      ),
      key: 'Logout'
    }
  ]

  return (
    <Layout.Header>
      <Row justify={'end'}>
        {isAuth && <div style={{ color: 'white'}}>{user.username}</div>}
        <Menu
          theme={'dark'}
          items={isAuth ? menuItemsAuth : menuItems}
          mode={'horizontal'}
          selectable={false}
        />
      </Row>
    </Layout.Header>
  );
};

export default NavBar;