import styled from 'styled-components';
import { blue } from '@carbon/colors';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 16px;
  background-color: ${blue[20]};
  color: ${blue[70]};
  border-color: ${blue[70]};
  border-style: solid;
  border-width: 1px;
  border-radius: 14px;
  font-weight: bolder;
  font-size: 20px
`;