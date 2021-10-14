import styled, { css } from 'styled-components';

export const CategoriesContainer = styled.div`
  ${({ width }) =>
    width >= 768
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

export const CategoriesSection = styled.section`
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
    `}
  padding: 3px 0px 13px 0px;
`;
