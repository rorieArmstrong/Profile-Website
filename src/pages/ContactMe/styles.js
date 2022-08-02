import styled from 'styled-components'
import { white } from '@carbon/colors';

export const TextInput = styled.input`
  margin-top: 1rem;
  padding-bottom: 1rem;
  min-width: 100%
`
export const TextArea = styled.textarea`
  margin-top: 1rem;
  padding-bottom: 1rem;
  min-width: 100%
`

export const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-top: 8px;
`

export const SubmitButton = styled.button`
  width: 50%;
  text-align: center;
  margin: auto;
  color: ${white};
  max-width: 200px;
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;
  &:hover {
    background-color: #2ecc40;
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;