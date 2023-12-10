import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink/>', () => {
  it('shoould render MenuLink with default values', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('shoould open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('shoould open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' }))
      .toMatchInlineSnapshot(`
      .c0 {
        display: block;
        text-decoration: none;
        padding: 1.6rem;
        font-size: 1.6rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.7rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143c;
        transition: all 200ms;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://localhost"
        target="_blank"
      >
        Children
         
      </a>
    `);
  });
});
