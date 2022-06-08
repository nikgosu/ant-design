import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import Login from "../pages/Login";
import Event from "../pages/Event";
import {useTypesSelector} from "../hooks/useTypesSelector";

const AppRouter = () => {

  const {isAuth} = useTypesSelector(state => state.auth)

  return (
    isAuth ?
      <Routes>
        {privateRoutes.map(route => (
          <Route key={route.path} path={route.path} element={<route.element/>}/>
        ))}
        <Route path={'*'} element={<Event/>}/>
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route => (
          <Route key={route.path} path={route.path} element={<route.element/>}/>
        ))}
        <Route path={'*'} element={<Login/>}/>
      </Routes>
  );
};

export default AppRouter;