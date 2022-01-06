import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <WrapContainer>{children}</WrapContainer>
      <Footer />
    </>
  );
};

export default AppLayout;

const WrapContainer = styled.main`
  padding-top: 50px;
  padding-bottom: 80px;
  -webkit-transition: left 250ms ease;
  transition: left 250ms ease;
  min-height: 850px;
  height: auto;
  margin-left: 200px;
  margin-right: 200px;
`;
