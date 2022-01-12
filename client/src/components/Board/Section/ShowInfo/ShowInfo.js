import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Email = styled.p`
  font-size: 15px;
  letter-spacing: -0.5px;
  display: flex;
  width: 170px;
  border-radius: 8px;
  padding-left: 5px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
  color: #aaa;
`;

const Description = styled.p`
  border-radius: 8px;
  padding-left: 5px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
  color: #aaa;
`;

function ShowInfo(props) {
  return (
    <>
      <ul>
        <li>
          <Email>{props.email}</Email>
        </li>
        <li>
          <Description>{props.userDescription}</Description>
        </li>
      </ul>
    </>
  );
}

export default withRouter(ShowInfo);
