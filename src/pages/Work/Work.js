import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import {
  PageLayout,
  Timeline,
  TimelineEntry,
  TimelineDot,
  TimelineLine,
  TimelineLabel,
  Content,
  WorkItem,
  WorkTitle,
  JobTitle,
} from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <SectionTitle>Work</SectionTitle>
      <PageLayout>
        <Timeline>
          {user.work.map((work, i) => (
            <TimelineEntry key={i}>
              <TimelineDot />
              {i < user.work.length - 1 && <TimelineLine />}
              <TimelineLabel href={`#work-${i}`}>
                <span>{work.company}</span>
                <small>{work.start.year}</small>
              </TimelineLabel>
            </TimelineEntry>
          ))}
        </Timeline>

        <Content>
          <ul>
            {user.work.map((work, i) => (
              <WorkItem key={i} id={`work-${i}`}>
                <WorkTitle>{work.position}</WorkTitle>
                <div>
                  <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
                  <span> &sdot; </span>
                  <span>
                    {work.start.year} to {work.end.year}
                  </span>
                </div>
                <Paragraph>{work.summary}</Paragraph>
              </WorkItem>
            ))}
          </ul>
        </Content>
      </PageLayout>
    </Layout>
  );
};

export default Work;
