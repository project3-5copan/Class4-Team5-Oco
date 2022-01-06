import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as TiIcons from 'react-icons/ti';

export const HeadbarData = [
  {
    title: '게시판',
    path: '/board',
    icon: <TiIcons.TiClipboard />,
    Name: 'nav-text',
  },
  {
    title: '채팅(+)',
    path: '/chat',
    icon: <BsIcons.BsChatDotsFill />,
    Name: 'nav-text',
  },
  {
    title: '문의하기(+)',
    path: '/Contact',
    icon: <BsIcons.BsEnvelopeFill />,
    Name: 'nav-text',
  },
];
