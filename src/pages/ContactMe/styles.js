import styled from 'styled-components'

export const TextInput = styled.input`
  display: block;
  width: 100%;
  margin-top: 0.5rem;
  padding: 10px 12px;
  background-color: #262626;
  border: 1px solid #525252;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  box-sizing: border-box;
  outline: none;
  transition: border-color 150ms ease;
  &:focus {
    border-color: #0f62fe;
  }
`

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  margin-top: 0.5rem;
  padding: 10px 12px;
  background-color: #262626;
  border: 1px solid #525252;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  box-sizing: border-box;
  outline: none;
  resize: vertical;
  transition: border-color 150ms ease;
  &:focus {
    border-color: #0f62fe;
  }
`

export const Label = styled.label`
  display: block;
  margin-top: 1.25rem;
  font-size: 0.875rem;
  color: #c6c6c6;
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: rgba(46, 204, 64, 0.2);
  border: 2px solid #2ecc40;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 200ms ease;
  &:hover {
    background-color: #2ecc40;
  }
`
