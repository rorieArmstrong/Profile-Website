import React from 'react'
import { User32, Code32, Portfolio32, Email32 } from '@carbon/icons-react'

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './styles'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/">
          <NavButton
            hasIconOnly
            renderIcon={User32}
            iconDescription="Me"
            tooltipPosition="bottom"
            alt="Navigate About Me"
          />
        </NavLink>
        <NavLink to="/experience">
          <NavButton
            hasIconOnly
            renderIcon={Portfolio32}
            iconDescription="Experience"
            tooltipPosition="bottom"
            alt="Navigate Experience"
          />
        </NavLink>
        <NavLink to="/projects">
          <NavButton
            hasIconOnly
            renderIcon={Code32}
            iconDescription="Projects"
            tooltipPosition="bottom"
            alt="Navigate Projects"
          />
        </NavLink>
        <NavLink to="/contactMe">
          <NavButton
            hasIconOnly
            renderIcon={Email32}
            iconDescription="Contact"
            tooltipPosition="bottom"
            alt="Navigate Contact Me"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav