import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants';
import TypeWriterEffect from 'react-typewriter-effect';
import HeroImg from '../../images/HeroImage.jpg'
import Button from '../Button/Button';
import { Download } from '@mui/icons-material';
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon } from './HeroStyle'

const ResumeButton = styled(Button)`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.primary};
  color: white;
  
  &:hover {
    background: ${({ theme }) => theme.primary + 'dd'};
  }
`;

const RoleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.5em;
  margin: 10px 0;
`;

const RoleText = styled.span`
  color: ${({ theme }) => theme.text_primary};
`;

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <RoleContainer>
                            <RoleText>I am a</RoleText>
                            <TypeWriterEffect
                                textStyle={{
                                    color: 'rgb(57, 134, 250)',
                                    fontWeight: 'bold',
                                    fontSize: '1.5em',
                                }}
                                startDelay={1000}
                                cursorColor="rgb(57, 134, 250)"
                                multiText={Bio.roles}
                                multiTextDelay={2000}
                                typeSpeed={70}
                                deleteSpeed={50}
                                hideCursorAfterText={true}
                            />
                        </RoleContainer>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton 
                            href="/kishanCVG.pdf" 
                            download="Kishan_Kumar_Resume.pdf"
                        >
                            <Download />
                            Download Resume
                        </ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection