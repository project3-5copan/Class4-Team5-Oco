import React, { useCallback, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UrlError } from 'library/options/errors';
import { useDispatch } from 'react-redux';
import { updateGithub, getGithub } from 'modules/actions/user';
import {
  FormBox,
  FormTitle,
  InputBox,
  RegistButton,
  FilledInput,
  ErrorMessage,
} from 'styles/form/styles';

function Github({ history }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });
  const dispatch = useDispatch();
  const userFrom = localStorage.getItem('userId');
  const [oldGitHub, getOldGitHub] = useState('');

  useEffect(() => {
    dispatch(getGithub(userFrom)).then(response => {
      getOldGitHub(response.payload.github);
    });
  }, [oldGitHub]);

  const onSubmit = useCallback(user => {
    user._id = userFrom;
    dispatch(updateGithub(user)).then(response => {
      if (!response.payload.changeSuccess) {
        alert(response.payload.message);
      } else {
        if (response.payload.changeSuccess) {
          alert('깃헙 주소가 변경되었습니다.');
          history.push('/mypage');
        } else {
          alert('깃헙 주소 변경에 실패했습니다.');
        }
      }
    });
  });

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>깃헙 변경</FormTitle>
      <InputBox>
        <label htmlFor="oldGithub">현재 깃헙 주소</label>
        <FilledInput
          id="oldGithub"
          name="oldGithub"
          value={oldGitHub}
          readOnly
        />
      </InputBox>
      <InputBox>
        <label htmlFor="newGithub">새 깃헙 주소</label>
        <FilledInput
          id="newGithub"
          name="newGithub"
          placeholder="ex) https://github.com/ragnarok-forU"
          {...register('newGithub', {
            pattern:
              /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi ||
              /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\\/a-z0-9-%#?&=\w]+)*)*/gi,
          })}
        />
        {errors.newGithub && (
          <ErrorMessage>{UrlError[errors.newGithub.type]}</ErrorMessage>
        )}
      </InputBox>
      <InputBox>
        <li>
          <RegistButton type="submit" onClick={handleSubmit(onSubmit)}>
            깃헙 변경
          </RegistButton>
        </li>
      </InputBox>
    </FormBox>
  );
}

export default withRouter(Github);
