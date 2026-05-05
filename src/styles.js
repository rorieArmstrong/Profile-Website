import styled from 'styled-components';
import { blue } from '@carbon/colors';

export const SectionTitle = styled.h3`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #525252;
  color: #ffffff;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
  line-height: 1.7;
  color: #c6c6c6;
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  background-color: ${blue[20]};
  color: ${blue[70]};
  border: 1px solid ${blue[40]};
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.75rem;
  white-space: nowrap;
`;