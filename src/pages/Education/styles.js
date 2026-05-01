import styled from 'styled-components'

export const EducationItem = styled.li`
  background-color: #262626;
  border: 1px solid #393939;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: border-color 150ms ease;
  &:hover {
    border-color: #525252;
  }
`

export const Institution = styled.h4`
  color: #ffffff;
  margin-bottom: 0.25rem;
`

export const Degree = styled.span`
  font-weight: 600;
  color: #c6c6c6;
`
