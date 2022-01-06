import React from 'react';
import styled from 'styled-components';
import MainDescription1 from 'assests/0oco.png';
import MainDescription2 from 'assests/0oco.png';
import MainDescription3 from 'assests/0oco.png';

const Main = () => {
  return (
    <>
      <MainTitle>
        블록체인 및 암호화폐 커뮤니티 사이트 시세, 포럼등의 정보를 제공한다.
        오코판
      </MainTitle>
      <MainBox>
        <MainImg src={MainDescription1} />
        <MainImg2 src={MainDescription2} />
        <MainImg3 src={MainDescription3} />
      </MainBox>
    </>
  );
};

export default Main;

const MainTitle = styled.h2`
  font-size: 25px;
  font-weight: 500;
  color: gray;
  width: 1000px;
  margin-bottom: 20px;
  margin-left: 200px;
  text-shadow: 2px 3px 4px gray;
`;

const MainImg = styled.img`
  width: 600px;
  height: 600px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const MainImg2 = styled.img`
  width: 600px;
  height: 600px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  z-index: 100;
  position: relative;
  top: 80px;
  left: -300px;
`;

const MainImg3 = styled.img`
  width: 600px;
  height: 600px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  z-index: 101;
  position: relative;
  top: 0px;
  left: -400px;
`;

const MainBox = styled.div`
  display: flex;
`;
