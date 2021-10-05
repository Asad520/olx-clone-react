import styled, { css } from 'styled-components';

export default styled.div`
  ${(props) =>
    props.width >= 768
      ? css`
          width: 65%;
          max-height: none;
        `
      : css`
          width: 50%;
          max-height: 80%;
        `}
  padding-left: 10px;
`;
