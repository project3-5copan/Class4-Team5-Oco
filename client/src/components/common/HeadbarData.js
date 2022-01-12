import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as TiIcons from 'react-icons/ti';
import CoinList from "../../components/Main/CoinList";

// export const HeadbarData = () => {
      
//     return (
//       <>  
//       <CoinList/>
//       </>
//     )};

export const HeadbarData = [
  {
    title: '게시판',
    path: '/board',
    icon: <TiIcons.TiClipboard />,
    Name: 'nav-text',
  },
  // {
  //   title: '채팅(+)',
  //   path: '/chat',
  //   icon: <BsIcons.BsChatDotsFill />,
  //   Name: 'nav-text',
  // },
  {
    title: '마이페이지',
    path: '/mypage',
    icon: <BsIcons.BsFillPersonFill />,
    Name: 'nav-text',
  }  
];
