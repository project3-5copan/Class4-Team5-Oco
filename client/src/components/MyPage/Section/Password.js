import React, { useState, useRef, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatePassword } from 'modules/actions/user';
import { useForm } from 'react-hook-form';
import { PasswordError, PasswordConfirmError } from 'library/options/errors';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import {
  FormBox,
  FormTitle,
  InputBox,
  PasswordBox,
  PasswordButton,
  RegistButton,
  FilledInput,
  ErrorMessage,
} from 'styles/form/styles';

function Password({ history }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });
  const dispatch = useDispatch();
  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowPassword2, setShowPassword2] = useState(false);
  const newPassword = useRef();
  newPassword.current = watch('newPassword');

  const handleVisibility = () => {
    setShowPassword(!ShowPassword);
  };
  const handleVisibility2 = () => {
    setShowPassword2(!ShowPassword2);
  };

  const onSubmit = useCallback(user => {
    user._id = localStorage.getItem('userId');
    dispatch(updatePassword(user)).then(response => {
      if (!response.payload.changeSuccess) {
        alert(response.payload.message);
      } else {
        if (response.payload.changeSuccess) {
          alert('비밀번호가 변경되었습니다.');
          history.push('/mypage');
        } else {
          alert('비밀번호 변경에 실패했습니다.');
        }
      }
    });
  });

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>비밀번호 변경</FormTitle>
      <InputBox>
        <label htmlFor="newPassword">새 비밀번호</label>
        <PasswordBox>
          <FilledInput
            id="newPassword"
            name="newPassword"
            type={ShowPassword ? 'text' : 'password'}
            placeholder="새 비밀번호를 입력하세요."
            {...register('newPassword', {
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
        {errors.newPassword && (
          <ErrorMessage>{PasswordError[errors.newPassword.type]}</ErrorMessage>
        )}
      </InputBox>
      <InputBox>
        <label htmlFor="confirmNewPassword">새 비밀번호 확인</label>
        <FilledInput
          id="confirmNewPassword"
          name="confirmNewPassword"
          type="password"
          placeholder="새 비밀번호를 다시 입력해주세요."
          {...register('passwordConfirm', {
            required: true,
            validate: value => value === newPassword.current,
          })}
        />
        {errors.passwordConfirm && (
          <ErrorMessage>
            {PasswordConfirmError[errors.passwordConfirm.type]}
          </ErrorMessage>
        )}
      </InputBox>
      <InputBox>
        <label htmlFor="currentPassword">현재 비밀번호</label>
        <PasswordBox>
          <FilledInput
            id="currentPassword"
            name="currentPassword"
            type={ShowPassword2 ? 'text' : 'password'}
            placeholder="대/소문자,숫자,특수문자 포함 8~20자"
            {...register('currentPassword', {
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
            <IconButton
              aria-label="toggle_password"
              onClick={handleVisibility2}
            >
              {ShowPassword2 ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </PasswordButton>
        </PasswordBox>
        {errors.currentPassword && (
          <ErrorMessage>
            {PasswordError[errors.currentPassword.type]}
          </ErrorMessage>
        )}
      </InputBox>
      <InputBox>
        <li>
          <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
            비밀번호 변경
          </RegistButton>
        </li>
      </InputBox>
    </FormBox>
  );
}

export default withRouter(Password);
