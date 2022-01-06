import React, { useState, useCallback } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from 'modules/actions/user';
import { EmailError, PasswordError } from 'library/options/errors';
import { useForm } from 'react-hook-form';
import 'styles/container/styles';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import StyledCheckBox from 'styles/container/styles';
import {
  FormBox,
  FormTitle,
  InputBox,
  PasswordBox,
  PasswordButton,
  LoginButton,
  FilledInput,
  ErrorMessage,
  TextBox,
} from 'styles/form/styles';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });
  const dispatch = useDispatch();
  const [ShowPassword, setShowPassword] = useState(false);
  const [RememberId, setRememberId] = useState(false);

  const handleVisibility = () => {
    setShowPassword(!ShowPassword);
  };
  const handleChange = e => {
    setRememberId(e.target.checked);
  };

  const onSubmit = useCallback(user => {
    dispatch(loginUser(user)).then(response => {
      if (response.payload.success) {
        alert(`${response.payload.name}님 환영합니다.`);
        console.log(response.payload._id);
        // 로컬스토리지 userId 저장
        window.localStorage.setItem('userId', response.payload._id);
        window.localStorage.setItem('userName', response.payload.name);
        window.location.replace('/');
      } else {
        alert(response.payload.message);
      }
    });
  }, []);

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>로그인</FormTitle>
      <InputBox>
        <label htmlFor="email">이메일</label>
        <FilledInput
          id="email"
          name="email"
          type="text"
          placeholder="이메일을 입력해주세요."
          {...register('email', {
            required: true,
            validate: {
              checkPattern: value =>
                [/^\S+@\S+$/i].every(pattern => pattern.test(value)),
            },
          })}
        />
        {errors.email && (
          <ErrorMessage>{EmailError[errors.email.type]}</ErrorMessage>
        )}
      </InputBox>
      <InputBox>
        <label htmlFor="password">비밀번호</label>
        <PasswordBox>
          <FilledInput
            id="password"
            name="password"
            type={ShowPassword ? 'text' : 'password'}
            placeholder="비밀번호를 입력해주세요."
            {...register('password', {
              required: true,
              minLength: 8,
              maxLength: 20,
              validate: {
                checkLang: value =>
                  ![/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/].every(pattern =>
                    pattern.test(value),
                  ),
                checkLower: value =>
                  [/[a-z]/].every(pattern => pattern.test(value)),
                checkUpper: value =>
                  [/[A-Z]/].every(pattern => pattern.test(value)),
                checkNumber: value =>
                  [/[0-9]/].every(pattern => pattern.test(value)),
                checkSpec: value =>
                  [/[^a-zA-Z0-9]/].every(pattern => pattern.test(value)),
              },
            })}
          />
          <PasswordButton>
            <IconButton aria-label="toggle_password" onClick={handleVisibility}>
              {ShowPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </PasswordButton>
        </PasswordBox>
        {errors.password && (
          <ErrorMessage>{PasswordError[errors.password.type]}</ErrorMessage>
        )}
      </InputBox>
      <StyledCheckBox
        name="RememberId"
        checked={RememberId}
        onChange={handleChange}
      />
      <LoginButton type="submit" onClick={handleSubmit(onSubmit)}>
        로그인
      </LoginButton>
      <TextBox>
        <span>아직 계정이 없으신가요?</span>
        <Link to="/register">
          <span>회원가입</span>
        </Link>
      </TextBox>
    </FormBox>
  );
}

export default withRouter(LoginPage);
