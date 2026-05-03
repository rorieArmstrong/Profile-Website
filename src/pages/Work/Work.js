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
  SubSectionTitle,
  WorkItem,
  WorkTitle,
  JobTitle,
} from './styles';

const Experience = ({ user }) => {
  const timelineEntries = [
    ...user.work.map((item, i) => ({
      type: 'work',
      index: i,
      name: item.company,
      year: item.start.year,
    })),
    ...user.education.map((item, i) => ({
      type: 'education',
      index: i,
      name: item.institution || item.position,
      year: item.start.year,
    })),
  ].sort((a, b) => b.year - a.year);

  return (
    <Layout user={user}>
      <SectionTitle>Experience</SectionTitle>
      <PageLayout>
        <Timeline>
          {timelineEntries.map((entry, i) => (
            <TimelineEntry key={`${entry.type}-${entry.index}`}>
              <TimelineDot $type={entry.type} />
              {i < timelineEntries.length - 1 && <TimelineLine />}
              <TimelineLabel href={`#${entry.type}-${entry.index}`}>
                <span>{entry.name ? entry.name : entry.institution}</span>
                <small>{entry.year}</small>
              </TimelineLabel>
            </TimelineEntry>
          ))}
        </Timeline>

        <Content>
          <SubSectionTitle>Work</SubSectionTitle>
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

          <SubSectionTitle>Education</SubSectionTitle>
          <ul>
            {user.education.map((education, i) => (
              <WorkItem key={i} id={`education-${i}`}>
                <WorkTitle>{education.institution || education.position}</WorkTitle>
                <div>
                  <JobTitle>
                    {education.studyType}, {education.area}
                  </JobTitle>
                  <span> &sdot; </span>
                  <span>
                    {education.start.year} to {education.end.year}
                  </span>
                </div>
                <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
              </WorkItem>
            ))}
          </ul>
        </Content>
      </PageLayout>
    </Layout>
  );
};

export default Experience;
