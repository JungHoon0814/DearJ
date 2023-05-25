import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Route할 페이지 import
import Home from './pages/home/Home';
import Resume from './pages/resume/Resume';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Admin from './pages/admin/Admin';
import Exports from './pages/exports/Exports';
import Result from './pages/result/Result';
import User from './pages/user/User';

import Loading from './pages/loading/Loading';
//layout
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Path 상수화를 위한 선언 ( Declaration for Path Constant )
export const Path = {
  HOME: '/',
  RESUME: '/resume',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  ADMIN: '/admin',
  EXPERTS: '/experts',
  RESULT: '/result',
  LOADING: '/loading',
  USER: '/user',
};

// 2023.04.23  Apply routing temporarily before applying the router
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={Path.HOME} element={<Home />} />
          <Route path={Path.RESUME} element={<Resume />} />
          <Route path={Path.SIGNIN} element={<SignIn />} />
          <Route path={Path.SIGNUP} element={<SignUp />} />
          <Route path={Path.ADMIN} element={<Admin />} />
          <Route path={Path.EXPERTS} element={<Exports />} />
          <Route path={Path.RESULT} element={<Result />} />
          <Route path={Path.LOADING} element={<Loading />} />
          <Route path={Path.USER} element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
