import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/constants';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarIcon from '@mui/icons-material/Star';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PeopleIcon from '@mui/icons-material/People';
import ForkRightIcon from '@mui/icons-material/ForkRight';

const GitHubStatsContainer = styled.div`
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

const StatsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 20px;
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid ${({ theme }) => theme.primary + '50'};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary + '15'};
  margin-bottom: 16px;
  color: ${({ theme }) => theme.primary};
  font-size: 28px;
`;

const StatValue = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 10px 0;
`;

const StatLabel = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  letter-spacing: 0.5px;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  width: 100%;
  max-width: 700px;
  height: 300px;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 18px;
  color: #e74c3c;
  width: 100%;
  max-width: 700px;
  text-align: center;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const GitHubStatsSection = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        
        // Extract username from GitHub URL
        const username = Bio.github.split('/').pop();
        
        // Add headers for better rate limiting
        const headers = {
          'Accept': 'application/vnd.github.v3+json',
        };
        
        // Fetch user data with error handling
        const userResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
        if (!userResponse.ok) {
          if (userResponse.status === 403) {
            throw new Error('GitHub API rate limit exceeded. Please try again later.');
          }
          throw new Error(`GitHub API error: ${userResponse.status}`);
        }
        const userData = await userResponse.json();
        
        // Fetch repositories data with error handling
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers });
        if (!reposResponse.ok) {
          if (reposResponse.status === 403) {
            throw new Error('GitHub API rate limit exceeded. Please try again later.');
          }
          throw new Error(`GitHub API error: ${reposResponse.status}`);
        }
        const reposData = await reposResponse.json();
        
        // Calculate stars and forks
        const stars = reposData.reduce((total, repo) => total + repo.stargazers_count, 0);
        const forks = reposData.reduce((total, repo) => total + repo.forks_count, 0);
        
        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          stars,
          forks
        });
        
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
        setError(err.message);
        // Set fallback stats if API fails
        setStats({
          repos: 0,
          followers: 0,
          stars: 0,
          forks: 0
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchGitHubStats();
  }, []);
  
  return (
    <GitHubStatsContainer id="github-stats">
      <Wrapper>
        <Title>GitHub Statistics</Title>
        <Desc>A snapshot of my open source contributions and GitHub activity</Desc>
        
        {loading && <Loading>Loading GitHub statistics...</Loading>}
        
        {error && <ErrorMessage>Failed to load GitHub stats: {error}</ErrorMessage>}
        
        {stats && (
          <StatsGrid>
            <StatCard>
              <IconWrapper>
                <AccountTreeIcon style={{ fontSize: '32px' }} />
              </IconWrapper>
              <StatValue>{stats.repos}</StatValue>
              <StatLabel>Repositories</StatLabel>
            </StatCard>
            <StatCard>
              <IconWrapper>
                <PeopleIcon style={{ fontSize: '32px' }} />
              </IconWrapper>
              <StatValue>{stats.followers}</StatValue>
              <StatLabel>Followers</StatLabel>
            </StatCard>
            <StatCard>
              <IconWrapper>
                <StarIcon style={{ fontSize: '32px' }} />
              </IconWrapper>
              <StatValue>{stats.stars}</StatValue>
              <StatLabel>Stars Earned</StatLabel>
            </StatCard>
            <StatCard>
              <IconWrapper>
                <ForkRightIcon style={{ fontSize: '32px' }} />
              </IconWrapper>
              <StatValue>{stats.forks}</StatValue>
              <StatLabel>Forks</StatLabel>
            </StatCard>
          </StatsGrid>
        )}
      </Wrapper>
    </GitHubStatsContainer>
  );
};

export default GitHubStatsSection; 