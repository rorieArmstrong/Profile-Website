import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 50%;
  min-width: 250px;
`

export const FormGroup = styled.div`
  margin-top: 1.25rem;
`

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  color: #c6c6c6;
  margin-bottom: 0.5rem;
`

export const TextInput = styled.input`
  display: block;
  width: 100%;
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

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`

export const SubmitButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #0f62fe;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 150ms ease, opacity 150ms ease;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  &:hover:not(:disabled) {
    background-color: #0353e9;
  }
  &:disabled {
    cursor: not-allowed;
  }
`

export const StatusMessage = styled.p`
  font-size: 0.875rem;
  color: ${({ $success }) => $success ? '#42be65' : '#fa4d56'};
  margin: 0;
`
