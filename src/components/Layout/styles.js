import styled from 'styled-components'
import { Content } from 'carbon-components-react/lib/components/UIShell'

export const StyledContent = styled(Content)`
  min-height: 100vh;
  margin-left: 0 !important;
  padding-top: 48px;
  background-color: ${({ transparent }) => transparent ? 'transparent' : '#111214'} !important;
  font-display: swap
`