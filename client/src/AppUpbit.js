import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { startInit } from "./modules/reducers/coinReducer";
import loadable from '@loadable/component';
import AppLayout from 'components/common/AppLayout';
import MainRouter from "./components/Router/MainRouter";
import Auth from 'library/utils/auth';

const Main = loadable(() => import('pages/Main'));
const Login = loadable(() => import('pages/Login'));
const Register = loadable(() => import('pages/Register'));
const Board = loadable(() => import('pages/Board'));
const BoardDetail = loadable(() => import('components/Board/BoardDetail'));
const MyPage = loadable(() => import('pages/MyPage'));

function AppUpbit() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startInit());
  }, [dispatch]);

  return <MainRouter />;
}

export default AppUpbit;