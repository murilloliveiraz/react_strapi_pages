import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink/>', () => {
  it('shoould render TextLogo', () => {
    renderTheme(<LogoLink link="#target" text="Olá Mundo" />);
    expect(screen.getByRole('link', { name: 'Olá Mundo' })).toHaveAttribute(
      'href',
      '#target',
    );
    expect(screen.getByRole('link', { name: 'Olá Mundo' })).toBeInTheDocument();
  });

  it('shoould render ImageLogo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg" />,
    );
    expect(screen.getByAltText('Olá Mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('shoould match snapshot', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg" />,
    );
    expect(screen.getByAltText('Olá Mundo')).toMatchSnapshot();
  });
});
