import styled, { css } from 'styled-components';

export default styled.div`
  ${(props) =>
    props.width < 370
      ? css`
          width: 14em;
        `
      : css`
          width: 16em;
        `}
  overflow-y: auto;
`;
