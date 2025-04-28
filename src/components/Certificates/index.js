import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/constants';

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card_light};
  padding: 80px 0;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 4px;
    border-radius: 20px;
    background: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 12px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Section = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid ${({ theme }) => theme.primary + '50'};
  }
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const ItemDesc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const CertificatesSection = () => {
  const certificates = [
    {
      title: "NPTEL Cloud Computing",
      description: "8 weeks comprehensive course on cloud computing fundamentals and applications"
    },
    {
      title: "GFG DSA Certification",
      description: "60+ hours of intensive Data Structures and Algorithms training"
    },
    {
      title: "GFG Machine Learning and Data Science",
      description: "90 hours program covering ML and Data Science concepts and applications"
    },
    {
      title: "Apna College DSA (Java)",
      description: "6 months placement course focusing on Data Structures and Algorithms in Java"
    }
  ];

  const achievements = [
    {
      title: "Selected for Sponsored Course",
      description: "Among 10 students chosen from 70 candidates for an exclusive sponsored course (January 2025)"
    },
    {
      title: "Led First-Ever Durga Puja Celebration",
      description: "Successfully organized Law Gate's first Durga Puja with a dedicated team"
    },
    {
      title: "NCO Zonal Rank",
      description: "Secured 18th rank at the zonal level in the National Cyber Olympiad (NCO) in class 10"
    }
  ];

  return (
    <Container id="certificates">
      <Wrapper>
        <Title>Certificates & Achievements</Title>
        <Desc>My professional certifications and notable accomplishments</Desc>
        
        <Section>
          <SectionTitle>Certificates</SectionTitle>
          <List>
            {certificates.map((cert, index) => (
              <ListItem key={index}>
                <ItemTitle>{cert.title}</ItemTitle>
                <ItemDesc>{cert.description}</ItemDesc>
              </ListItem>
            ))}
          </List>
        </Section>

        <Section>
          <SectionTitle>Achievements</SectionTitle>
          <List>
            {achievements.map((achievement, index) => (
              <ListItem key={index}>
                <ItemTitle>{achievement.title}</ItemTitle>
                <ItemDesc>{achievement.description}</ItemDesc>
              </ListItem>
            ))}
          </List>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default CertificatesSection; 