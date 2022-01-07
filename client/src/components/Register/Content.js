import React, { useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser, checkUser } from 'modules/actions/user';
import { useForm } from 'react-hook-form';
import {
  PasswordError,
  PasswordConfirmError,
  NameError,
  UrlError,
  DescriptionError,
} from 'library/options/errors';
import {
  FormBox,
  FormTitle,
  InputBox,
  PasswordBox,
  PasswordButton,
  RadioBox,
  SelectBox,
  StyledTextArea,
  RegistButton,
  FilledInput,
  FilledRadio,
  ErrorMessage,
} from 'styles/form/styles';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function RegisterPage(props) {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });
  const dispatch = useDispatch();
  const password = useRef();
  password.current = watch('password');

  const [ShowPassword, setShowPassword] = useState(false);
  const handleVisibility = () => {
    setShowPassword(!ShowPassword);
  };

  const onSubmit = async data => {
    console.log(data);
    try {
      await dispatch(checkUser(data.email))
        .then(response => {
          if (response.payload.success) {
            dispatch(registerUser(data));
            alert(`${data.name}님 회원가입을 축하드립니다.`);
            props.history.push('/login');
          } else {
            setError('email', {
              type: 'validate',
              message: response.payload.message,
            });
          }
        })
        .catch(error => {
          console.log('response: ', error.response);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>회원가입</FormTitle>
        <InputBox>
          <label htmlFor="email">이메일</label>
          <FilledInput
            id="email"
            name="email"
            type="email"
            placeholder="이메일 형식에 맞게 입력해주세요."
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
              placeholder="대/소문자, 숫자, 특수문자 포함 8~20자"
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
              <IconButton
                aria-label="toggle_password"
                onClick={handleVisibility}
              >
                {ShowPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </PasswordButton>
          </PasswordBox>
          {errors.password && (
            <ErrorMessage>{PasswordError[errors.password.type]}</ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <label htmlFor="confirmpassword">비밀번호 확인</label>
          <FilledInput
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            placeholder="비밀번호 확인"
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
          <label htmlFor="name">이름</label>
          <FilledInput
            id="name"
            name="name"
            type="text"
            placeholder="이름을 입력해주세요."
            {...register('name', {
              required: true,
              minLength: true,
              minLength: 2,
              maxLength: 8,
            })}
          />
          {errors.name && (
            <ErrorMessage>{NameError[errors.name.type]}</ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <label htmlFor="github">GitHub</label>
          <FilledInput
            id="github"
            name="github"
            placeholder="ex) https://github.com/project3-5copan/Class4-Team5-Oco"
            {...register('github', {
              required: true,
              pattern:
                /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi ||
                /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\\/a-z0-9-%#?&=\w]+)*)*/gi,
            })}
          />
          {errors.github && (
            <ErrorMessage>{UrlError[errors.github.type]}</ErrorMessage>
          )}
        </InputBox>
        <RadioBox>
          <label htmlFor="gender">성별</label>
          <FilledRadio
            {...register('gender')}
            className="gender"
            value="남자"
            checked
            readOnly
          />
          남자
          <FilledRadio
            {...register('gender')}
            className="gender"
            value="여자"
            readOnly
          />
          여자
        </RadioBox>
        <SelectBox>
          <label htmlFor="field">개발분야</label>
          <select
            id="field"
            name="field"
            {...register('field', { required: true })}
          >
            <option value="프론트엔드">프론트엔드</option>
            <option value="백엔드">백엔드</option>
            <option value="풀스택">풀스택</option>
          </select>
        </SelectBox>
        <InputBox>
          <label htmlFor="userDescription">자기소개</label>
          <StyledTextArea
            id="userDescription"
            name="userDescription"
            placeholder="자기소개를 입력해주세요."
            {...register('userDescription', {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.userDescription && (
            <ErrorMessage>
              {DescriptionError[errors.userDescription.type]}
            </ErrorMessage>
          )}
        </InputBox>
        <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
          회원가입
        </RegistButton>
      </FormBox>
    </>
  );
}

export default withRouter(RegisterPage);
