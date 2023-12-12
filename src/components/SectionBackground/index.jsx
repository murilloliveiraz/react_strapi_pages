import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <Styled.Container background={background}>
      <SectionContainer>
        <h1>{children}</h1>
      </SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
