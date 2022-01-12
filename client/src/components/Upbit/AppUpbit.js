import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { startInit } from "../../modules/reducers/coinReducer";
import loadable from '@loadable/component';
import AppLayout from 'components/common/AppLayout';
import MainRouter from "../Router/MainRouter";
import Auth from 'library/utils/auth';


function AppUpbit() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startInit());
  }, [dispatch]);

  return <MainRouter />;
}

export default AppUpbit;