import React, { useState, useRef, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { withdrawalUser } from 'modules/actions/user';
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

function Withdrawal({ history }) {
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
  const password = useRef();
  password.current = watch('password');

  const handleVisibility = () => {
    setShowPassword(!ShowPassword);
  };

  const onSubmit = useCallback(user => {
    user._id = localStorage.getItem('userId');
    let confirmWithdrawal = window.confirm(
      '탈퇴하시겠습니까?                                                                              ※ 개인정보, 모든 게시물 등의 데이터가 삭제되며, 복구할 수 없습니다. ※',
    );
    confirmWithdrawal &&
      dispatch(withdrawalUser(user)).then(response => {
        if (!response.payload.changeSuccess) {
          alert(response.payload.message);
        } else {
          if (response.payload.changeSuccess) {
            alert('회원탈퇴가 완료되었습니다.');
            history.push('/');
          } else {
            alert('회원탈퇴에 실패했습니다.');
          }
        }
      });
  });

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>회원탈퇴</FormTitle>
      <InputBox>
        <label htmlFor="password">비밀번호</label>
        <PasswordBox>
          <FilledInput
            id="password"
            name="password"
            type={ShowPassword ? 'text' : 'password'}
            placeholder="대/소문자,숫자,특수문자 포함 8~20자"
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
      <InputBox>
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <FilledInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
          {...register('passwordConfirm', {
            required: true,
            validate: value => value === password.current,
          })}
        />
        {errors.passwordConfirm && (
          <ErrorMessage>
            {PasswordConfirmError[errors.passwordConfirm.type]}
          </ErrorMessage>
        )}
      </InputBox>
      <InputBox>
        <li>
          <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
            회원탈퇴
          </RegistButton>
        </li>
      </InputBox>
    </FormBox>
  );
}

export default withRouter(Withdrawal);
