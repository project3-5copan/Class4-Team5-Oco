import React from 'react';
import styled from 'styled-components';
import withSize from "../Container/withSize";
import { viewSize } from "../styles/theme";
import CoinInfoHeader from "../components/Main/CoinInfoHeader";
import ChartDataConsole from "../components/Main/ChartDataConsole";
import MainChart from "../components/Main/MainChart";
import CoinList from "./CoinList";
import MainDescription from '../assests/0oco01.png'



const MainTitle = styled.h2`
  font-size: 25px;
  font-weight: 500;
  color: gray;
  width: 1000px;
  margin-bottom: 20px;
  margin-left: 200px;
  text-shadow: 2px 3px 4px gray;
`;

// const MainImg = styled.img`
//   width: 600px;
//   height: 600px;
//   box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
//   border-radius: 10px;
// `;

// const MainImg2 = styled.img`
//   width: 600px;
//   height: 600px;
//   box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
//   border-radius: 10px;
//   z-index: 100;
//   position: relative;
//   top: 80px;
//   left: -300px;
// `;

// const MainImg3 = styled.img`
//   width: 600px;
//   height: 600px;
//   box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
//   border-radius: 10px;
//   z-index: 101;
//   position: relative;
//   top: 0px;
//   left: -400px;
// `;

// const MainBox = styled.div`
//   display: flex;
// `;

const Main = () => {
  return (
    <>
      <MainTitle>
        블록체인 및 암호화폐 커뮤니티 사이트 시세, 포럼등의 정보를 제공한다.
        오코판
      </MainTitle>
      
      {/* <MainBox>
        <MainImg src={MainDescription} />
        <MainImg2 src={MainDescription} />
        <MainImg3 src={MainDescription} />
      </MainBox> */}
      <CoinList />
    </>
  );
};

export default withSize()(React.memo(Main));

// const St = {
//   MainContentContainer: styled.div`
//     display: flex;
//     justify-content: center;
//     max-width: 1500px;
//     margin: 0 auto;
//     margin-top: 10px;
//     margin-bottom: 50px;
//     width: 100%;
//     height: 100%;

//     @media ${({ theme }) => theme.tablet} {
//       margin-top: 0;
//       margin-bottom: 0;
//     }
//   `,
//   ChartAndTradeContainer: styled.section`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 95%;
//     max-width: 950px;

//     @media ${(props) => (props.isRootURL ? props.theme.tablet : true)} {
//       display: none;
//     }
//   `,
//   HiddenH2: styled.h2`
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     clip: rect(0, 0);
//     clip-path: polygon(0, 0);
//     overflow: hidden;
//     text-indent: -9999px;
//   `,
//   MainChartContainer: styled.div`
//     width: 100%;
//     height: 500;
//   `,
//   TradeInfoContainer: styled.div`
//     display: flex;
//     width: 100%;
//     margin-top: 10px;
//     @media ${({ theme }) => theme.mobileM} {
//       margin-top: 0;
//     }
//   `,
//   TradeOrderContainer: styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 55%;
//     min-width: 180px;
//     margin-left: 10px;
//     @media ${({ theme }) => theme.mobileM} {
//       margin-left: 0;
//       border: 2px solid ${({ theme }) => theme.lightGray1};
//       /* border-top: 1px solid ${({ theme }) => theme.lightGray1};
//       border-bottom: 1px solid ${({ theme }) => theme.lightGray1};
//       border-left: 1px solid ${({ theme }) => theme.lightGray1}; */
//     }
//   `,
// };

// const Main = ({ match, widthSize, heightSize }) => {
//   const isRootURL = match.path === "/board";

//   return (
//     <>
//       {/* <Header isRootURL={isRootURL} /> */}
//       <St.MainContentContainer>
//         {
//           // 차트 및 주문 관련 뷰는 메인 페이지이면서 tablet 사이즈보다 크거나, 메인 페이지가 아닌 경우에만 그린다
//           ((isRootURL && widthSize > viewSize.tablet) || !isRootURL) && (
//             <St.ChartAndTradeContainer isRootURL={isRootURL}>
//               <St.HiddenH2>차트 및 주문 정보 창</St.HiddenH2>
//               <CoinInfoHeader />
//               <ChartDataConsole />
//               <MainChart />
//               <St.TradeInfoContainer>
//                 {/* <Orderbook /> */}
//                 <St.TradeOrderContainer>
//                   {/* <OrderInfo />
//                   <TradeList /> */}
//                 </St.TradeOrderContainer>
//               </St.TradeInfoContainer>
//             </St.ChartAndTradeContainer>
//           )
//         }
//         {
//           // 코인 리스트 뷰는 메인 페이지이거나, 메인 페이지가 아니면서  tablet 사이즈보다 큰  경우에만 그린다
//           (isRootURL || (!isRootURL && widthSize > viewSize.tablet)) && (
//             <CoinList
//               widthSize={widthSize}
//               heightSize={heightSize}
//               isRootURL={isRootURL}
//             />
//           )
//         }
//       </St.MainContentContainer>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default withSize()(React.memo(Main));
