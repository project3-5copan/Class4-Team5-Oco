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


const BoardBox = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const Alert = styled.p`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  color: #de506b;
  font-size: 13px;
  padding: 4px 0px;
`;

const BoardWriteForm = styled.form`
  display: flex;
  justify-content: center;
`;

const BoardButton = styled.button`
  border-radius: 8px;
  font-weight: 600;
  width: 100%;
  height: 30px;
  padding-left: 30px;
  letter-spacing: 20px;
  text-align: center;
  background-color: #1a83ff;
  color: #fff;
  &:active {
    opacity: 0.7;
  }
`;

const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

function BoardInfo({ history, coinSymbol }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const datas = await axios.get(`http://localhost:5000/api/coinname/${coinSymbol}`);
      setData(datas.data);
      console.log(data)
    };
    getData();
    
  }, [ coinSymbol ]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (data === null) {
    return <div>Load..</div>;
  } else {
    return (
      <div>
        {data}
      </div>
    );
  }
};
export default withSelectedCoinName()(withRouter(BoardInfo));

