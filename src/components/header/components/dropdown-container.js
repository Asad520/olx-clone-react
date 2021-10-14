import styled, { css } from 'styled-components';

export default styled.div`
  ${({ width }) =>
    width < 370
      ? css`
          width: 14em;
        `
      : css`
          width: 16em;
        `}
  overflow-y: auto;
`;
