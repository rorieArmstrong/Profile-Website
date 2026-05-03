import styled from 'styled-components'

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectItem = styled.a`
  display: block;
  background-color: #262626;
  border: 1px solid #393939;
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
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
