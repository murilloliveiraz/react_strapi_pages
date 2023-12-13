import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-bottom: ${theme.colors.mediumGray};

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      /* visibility: hidden;
      opacity: 0; */

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        padding-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      /* padding: ${theme.spacings.xxlarge}; */
    }
  `}
`;

export const Button = styled.div`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme};
  `}
`;
