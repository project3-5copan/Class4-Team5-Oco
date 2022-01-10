import styled from 'styled-components';

export const FormBox = styled.form`
  border-radius: 10px;
  margin: 0 auto;
  width: 600px;
  padding: 50px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;

export const FormTitle = styled.h1`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const InputBox = styled.div`
  margin-top: 10px;
  width: 100%;
  position: relative;
  display: flex;
  margin-left: 110px;
  flex-direction: column;
  align-items: start;
  & label {
    display: flex;
    align-items: start;
    font-size: 14px;
    font-weight: 700;
    margin-right: 220px;
  }
  & focus-within {
    color: #4957a5;
  }
`;

export const FilledInput = styled.input`
  position: relative;
  width: 280px;
  height: 48px;
  padding: 0 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #eee;
  font-weight: 500;
`;

export const ErrorMessage = styled.p`
  color: #de506b;
  font-size: 13px;
  padding: 4px 0px;
`;

export const PasswordBox = styled.div`
  position: relative;
  width: 100%;
`;

export const PasswordButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 215px;
`;

export const LoginButton = styled.button`
  margin: 0 auto;
  width: 280px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #1a83ff;
  color: #fff;
  font-weight: 700;

  &:active {
    opacity: 0.7;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  padding-right: 17px;
  & span {
    font-size: 14px;
    font-weight: 500;
    color: #aaa;
  }
  & a span {
    color: #1a83ff;
    font-weight: 600;
  }
`;

export const RadioBox = styled.div`
  margin-top: 10px;
  width: 100%;
  position: relative;
  display: flex;
  margin-left: 110px;
  flex-direction: row;
  align-items: start;
  font-size: 14px;
  & label {
    display: flex;
    align-items: start;
    font-size: 14px;
    font-weight: 700;
    margin-right: 140px;
  }
  & focus-within {
    color: #4957a5;
  }
`;

export const FilledRadio = styled.input.attrs({ type: 'radio' })`
  margin-right: 10px;
`;

export const SelectBox = styled.div`
  margin-top: 10px;
  width: 100%;
  position: relative;
  display: flex;
  margin-left: 110px;
  flex-direction: row;
  align-items: start;
  & select {
    width: 100px;
    margin-left: 120px;
    border-radius: 3px;
    padding: 5px 10px;
    background-color: #eee;
    border: none;
    color: #000;
    position: relative;
    top: -3px;
  }
  & label {
    display: flex;
    align-items: start;
    font-size: 14px;
    font-weight: 700;
  }
  & focus-within {
    color: #4957a5;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 280px;
  height: 100px;
  padding: 20px;
  border-radius: 20px;
  background-color: #eee;
  &:hover {
    border: 1px solid #4957a5;
  }
  &:focus {
    border: 1px solid #4957a5;
    box-shadow: inset 0 0 0 1px #4957a5;
  }
`;

export const RegistButton = styled.button`
  margin: 0 auto;
  width: 280px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #1a83ff;
  color: #fff;
  font-weight: 700;
  margin-top: 10px;
  &:active {
    opacity: 0.7;
  }
`;
