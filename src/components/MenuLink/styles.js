import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.7rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 200ms;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
