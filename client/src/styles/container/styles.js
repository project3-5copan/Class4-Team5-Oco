import styled from '@emotion/styled';
import { media } from '../media_query';

export const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  transition: all 0.2s;

  ${media.mobile`
      width: calc(100% - 1rem);        
  `}
  ${media.tablet`
      width: calc(100% - 2rem);
  `}
  ${media.desktop`
      width: 1200px;
  `}
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: all 0.2s;

  width: calc(100%-2rem);
  height: calc(100vh - 140px);

  /* height: calc(100vh - (header + footer height)); */

  ${media.tablet`
    width: calc(100%-1rem);
  `}
  ${media.desktop`
    width: 100%;
  `}
`;

export const BorderButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: ${props => props.marginTop || '10px'};
  font-size: 16px;
  color: #fff;
  background-color: #4957a5;
  border-radius: 30px;
`;

import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';

export const useStyles = makeStyles({
  root: {
    marginTop: '4px',
    padding: '0px 95px',
    '& span:first-child': {
      paddingTop: '1.5px',
    },
    '& span:last-child': {
      color: '#757575',
      fontSize: '14px',
      fontWeight: '400',
    },
    '&:hover': {
      '& span': {
        color: '#3f51b5',
      },
    },
    '&:focus-within': {
      '& span': {
        color: '#3f51b5',
      },
    },
  },
});

const CheckboxStyles = withStyles({
  root: {
    color: '#c1c8f0',
    '&$checked': {
      color: '#3f51b5',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const StyledCheckBox = () => {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.root}
      control={
        <CheckboxStyles
          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
          checkedIcon={<CheckBoxIcon fontSize="small" />}
          name="loginControl"
        />
      }
      label="로그인 유지하기"
    />
  );
};

export default StyledCheckBox;
