import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.span`
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme['navbarDropdownHeaderColor']};
  cursor: pointer;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

const NavbarDropdownHeader = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarDropdownHeader.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownHeader