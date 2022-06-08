import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import {UseActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

function App() {

  const {setIsAuth, setUser} = UseActions()

  useEffect(() => {
    const auth = localStorage.getItem('auth')
    if (auth === 'true') {
      setUser({username: localStorage.getItem('username') ?? ''} as IUser)
      setIsAuth(true)
    }
  }, [])

  return (
    <Layout>
      <NavBar/>
      <Content>
        <AppRouter/>
      </Content>
    </Layout>
  );
}

export default App;
