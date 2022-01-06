import React, { useState, useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getEmail, updateEmail } from 'modules/actions/user';
import { PasswordError } from 'library/options/errors';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import {
  FormBox,
  FormTitle,
  ErrorMessage,
  InputBox,
  FilledInput,
  PasswordBox,
  PasswordButton,
  RegistButton,
} from 'styles/form/styles';

function Email({ history }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });
  const dispatch = useDispatch();
  const userFrom = localStorage.getItem('userId');
  const [ShowPassword, setShowPassword] = useState(false);
  const [oldEmail, getOldEmail] = useState('');
  const handleVisibility = () => {
    setShowPassword(!ShowPassword);
  };

  useEffect(() => {
    dispatch(getEmail(userFrom)).then(response => {
      getOldEmail(response.payload.email);
    });
  }, []);

  const onSubmit = useCallback(user => {
    user._id = userFrom;
    dispatch(updateEmail(user)).then(response => {
      if (!response.payload.changeSuccess) {
        alert(response.payload.message);
      } else {
        if (response.payload.changeSuccess) {
          alert('이메일이 변경되었습니다.');
          history.push('/mypage');
        } else {
          alert(response.payload.message);
        }
      }
    });
  }, []);

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>이메일 변경</FormTitle>
      <InputBox>
        <label htmlFor="oldEmail">현재 이메일</label>
        <FilledInput id="oldEmail" name="oldEmail" value={oldEmail} readOnly />
      </InputBox>
      <InputBox>
        <label htmlFor="email">변경할 이메일</label>
        <FilledInput
          id="email"
          name="email"
          type="email"
          placeholder="변경할 이메일을 입력해주세요."
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: '이메일 형식이 올바르지 않습니다.',
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
              maxLenght: 20,
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
      <InputBox>
        <li>
          <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
            이메일 변경
          </RegistButton>
        </li>
      </InputBox>
    </FormBox>
  );
}

export default withRouter(Email);
