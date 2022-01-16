// import React, { useEffect, useState } from 'react';
// import { withRouter } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
// import withSelectedCoinName from '../../Container/withSelectedCoinName'

// import axios from "axios";

// const BoardInfo = ({ history, coinSymbol }) => {

//   const dispatch = useDispatch();
//   const [data, setData] = useState(null);
//   const getData = async () => {
//     const datas = await axios.get(`http://localhost:5000/api/coninfo/${coinSymbol}`);
//     setData(datas.data);
//     console.log(data)
//   };
//   useEffect(() => {
//     getData();

//   }, [coinSymbol]);

//   useEffect(() => {
//     console.log(data);
//   }, [data]);
//   dispatch().then(response => {
//     if (response.payload.success) {
//       getData();
//     } else {
//       alert('coininfo 업로드에 실패하엿습니다.');
//     }
//   });


//   if (data === null) {
//     return <div>Load..</div>;
//   } else {
//     // console.log(typeof(data));
//     return (
//       <div>
//         {coinSymbol},
//         {data},
//         data
//       </div>
//     );
//   }
// };

// export default withSelectedCoinName()(withRouter(BoardInfo));


// ------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import AddBoard from './Section/Board/AddBoard';
import BoardTextarea from './Section/Board/BoardTextarea';
import BoardInput from './Section/Board/BoardInput';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch } from 'react-redux';
// import { listCoin } from 'modules/actions/coininfo';
// import { listCoin } from 'modules/actions/board';
import styled from 'styled-components';
import axios from 'axios';
import withSelectedCoinName from '../../Container/withSelectedCoinName'


const InfoBox = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);
  margin-bottom: 10px;
  font-size: 13px;
  padding-left: 10px;
  padding-top: 5px;
`;

const Alert = styled.p`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  color: #de506b;
  font-size: 13px;
  padding: 4px 0px;
`;

function BoardInfo({ history, coinSymbol }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [url, setURL] = useState('')
  // const [coinName, setCoinName] = useState('');
  // setCoinName(coinSymbol)
  console.log(coinSymbol)
  useEffect(() => {
    setURL(`http://localhost:5000/api/coininfo/${coinSymbol}`)
  });
  const getData = async () => {
    setIsLoading(true)
    const datas = await axios.get(url);
    setData(datas.data);
    setIsLoading(false)
  };
  useEffect(() => {
    getData();
    // console.log(data);
  }, [url]);

  if (data === null) {
    return <div>Loading {coinSymbol} info..</div>;
  } else {
    return (
      <>
        <InfoBox>
          {isLoading ? (`${coinSymbol} 정보 loading중 입니다`) : data}
        </InfoBox>
      </>
    );
  }
};
export default withSelectedCoinName()(withRouter(BoardInfo));

