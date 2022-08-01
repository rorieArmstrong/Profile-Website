import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'

export const StyledSideNav = styled(SideNav)`
  padding-top: 20px;
  font-size: 42;
  @media (max-width: 640px) {
    display: none;
  }
`