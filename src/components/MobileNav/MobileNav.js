import React from 'react'
import { User, Code, Portfolio, Education } from '@carbon/icons-react'

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './styles'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/">
          <NavButton
            hasIconOnly
            renderIcon={User}
            iconDescription="Me"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/projects">
          <NavButton
            hasIconOnly
            renderIcon={Code}
            iconDescription="Projects"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/work">
          <NavButton
            hasIconOnly
            renderIcon={Portfolio}
            iconDescription="Work"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/education">
          <NavButton
            hasIconOnly
            renderIcon={Education}
            iconDescription="Education"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav