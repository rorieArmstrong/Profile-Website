import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'

export const StyledSideNav = styled(SideNav)`
  border-width: 0px 2px 0px 0px;
  border-style: solid;
  border-color: white;
  border-radius: 50 px;
  padding-top: 20px;
  font-size: 42;
  @media (max-width: 640px) {
    display: none;
  }
`