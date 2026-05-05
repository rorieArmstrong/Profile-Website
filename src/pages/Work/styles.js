import styled from 'styled-components'

export const PageLayout = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
`

export const Timeline = styled.nav`
  position: sticky;
  top: calc(48px + 2rem);
  display: flex;
  flex-direction: column;
  min-width: 140px;
  flex-shrink: 0;

  @media (max-width: 640px) {
    display: none;
  }
`

export const TimelineEntry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding-left: 1.25rem;
`

export const TimelineDot = styled.div`
  position: absolute;
  left: 0;
  top: 0.35rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $type, $active }) =>
    $active ? '#4a8fd4' :  '#525252'};
  border: 2px solid ${({ $type, $active }) =>
    $active ? '#2d5f96' : '#393939'};
  flex-shrink: 0;
  transition: background-color 200ms ease, border-color 200ms ease;
`

export const TimelineLine = styled.div`
  position: absolute;
  left: 3px;
  top: 0.75rem;
  width: 2px;
  bottom: 0;
  background-color: #393939;
`

export const TimelineLabel = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.75rem;
  text-decoration: none;
  cursor: pointer;

  span {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ $active }) => $active ? '#ffffff' : '#c6c6c6'};
    line-height: 1.3;
    transition: color 200ms ease;
  }

  small {
    font-size: 0.7rem;
    color: ${({ $active }) => $active ? '#8a9ab0' : '#525252'};
    margin-top: 0.1rem;
    transition: color 200ms ease;
  }

  &:hover span {
    color: #ffffff;
  }
`

export const Content = styled.div`
  flex: 1;
  min-width: 0;
`

export const SubSectionTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #525252;
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;

  &:first-child {
    margin-top: 0;
  }
`

export const WorkItem = styled.li`
  scroll-margin-top: calc(48px + 1.5rem);
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

export const WorkTitle = styled.h4`
  color: #ffffff;
  margin-bottom: 0.25rem;
`

export const JobTitle = styled.span`
  font-weight: 600;
  color: #c6c6c6;
`
