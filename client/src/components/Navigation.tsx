import React, { useState, ReactElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const NavContainer = styled.nav`
  position: relative;
`;

const Nav = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-width: 100%;

  & button {
    margin: 0.2rem 0.5rem;
  }

  @media (max-width: ${(props): number => props.theme.breaks.small + 1}px) {
    position: absolute;
    top: 1.25rem;
    display: ${(props): string => (props.open ? 'flex' : 'none')};
    box-shadow: 5px 5px 3px 0 rgba(0, 0, 0, 0.75);
    background-color: white;
    align-items: center;
    justify-content: stretch;
    flex-direction: column;
    border: 1px solid ${(props): string => props.theme.mainDark};
  }
`;

const MobileNavTrigger = styled.div`
  display: none;

  @media (max-width: ${(props): number => props.theme.breaks.small}px) {
    display: block;
  }
`;

export default function Navigation({ children }: React.PropsWithChildren<{}>): React.ReactElement {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = (): void => setOpen(false);
  const toggleMobileMenu = (): void => setOpen(!open);

  return (
    <NavContainer>
      <MobileNavTrigger>
        <Button onClick={toggleMobileMenu} type="button">
          Categories
        </Button>
      </MobileNavTrigger>
      <Nav open={open}>
        {React.Children.map(children, (child) => {
          return (
            React.isValidElement(child) &&
            React.cloneElement(child as React.ReactElement, { afterClick: closeMobileMenu })
          );
        })}
      </Nav>
    </NavContainer>
  );
}

export function NavigationItem({
  onClick,
  afterClick,
  children,
}: React.PropsWithChildren<{ onClick: () => void; afterClick: () => void }>): React.ReactElement {
  const onClickNav = (): void => {
    onClick();
    if (typeof afterClick === 'function') {
      afterClick();
    }
  };

  return <Button onClick={onClickNav}>{children}</Button>;
}

NavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  afterClick: PropTypes.func,
};

NavigationItem.defaultProps = {
  afterClick: null,
};
