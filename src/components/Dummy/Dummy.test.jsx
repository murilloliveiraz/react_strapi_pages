import { screen } from '@testing-library/react';
import { Dummy } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Dummy/>', () => {
  it('shoould render Dummy component', () => {
    renderTheme(<Dummy>Children</Dummy>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
