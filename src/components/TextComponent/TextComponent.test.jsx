import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<TextComponent/>', () => {
  it('shoould render TextComponent component', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    expect(screen.getByText('texto')).toBeInTheDocument();
  });

  it('shoould render TextComponet with correct font-size', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    expect(screen.getByText('texto')).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });
});
