import styled, { css } from 'styled-components';

export default styled.section`
  ${(props) =>
    props.shadow &&
    css`
      box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
    `}
  padding: 3px 0px 13px 0px;
`;
