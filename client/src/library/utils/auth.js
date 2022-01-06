import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from 'modules/actions/user';

export default function auth_user(
  SpecificComponent,
  option,
  adminRoute = null,
) {
  function AuthenticationCheck(props) {
    let user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then(response => {
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push('/login');
          }
        } else if (adminRoute && !response.payload.isAdmin) {
          props.history.push('/');
        } else if (option === false) {
          props.history.push('/home');
        }
      });
    }, []);
    return <SpecificComponent {...props} user={user} />;
  }
  return AuthenticationCheck;
}
