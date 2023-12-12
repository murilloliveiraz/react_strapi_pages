import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionBackground/>', () => {
  it('shoould render SectionBackground with dark background', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByText('Children')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('shoould render SectionBackground with light background', () => {
    renderTheme(
      <SectionBackground background={false}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
