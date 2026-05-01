import styled from 'styled-components'

export const ProjectItem = styled.li`
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

export const ProjectTitle = styled.h4`
  color: #ffffff;
  margin-bottom: 0.5rem;
`

export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1rem;
`
