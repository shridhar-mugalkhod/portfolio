import { CloseRounded,LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import Chip from '@mui/material/Chip';

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`;

const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
`;

const Title = styled.div`
  padding: 10px 0px;
  font-size: 28px;
  font-weight: 800;
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const Desc = styled.div`
height: 100%;
max-height: 200px;
overflow-y: scroll;
padding-right: 10px;
    white-space: pre-wrap;
    line-height: 1.5rem;
    font-size: 16px;
    font-weight: 400;
    color: #5f6368;
    text-align: justify;
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

const Label = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    gap: 8px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const MemberImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const MemberName = styled.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

const ButtonContainer= styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled.a`
background-color: #1a73e8;
color: #fff;
-webkit-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
-webkit-box-align: center;
align-items: center;
border: 1px solid transparent;
border-radius: 4px;
display: inline-flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
flex-flow: row nowrap;
font-family: "Google Sans",Arial,Helvetica,sans-serif;
font-size: 16px;
font-weight: 500;
justify-content: space-around;
letter-spacing: .5px;
line-height: 24px;
margin: 10px;
max-width: 380px;
min-height: 48px;
min-width: 96px;
overflow: hidden;
padding: 12px 24px 12px 24px;
text-align: center;
text-decoration: none;
vertical-align: middle;

&:hover {
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
  background-color: #185abc;
}

@media (max-width: 640px) {
    font-size: 14px;
} 

`;

const Description = styled.div`
    font-weight: 400;
    color: #5f6368;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 16px;
    margin-left: 6px;
    margin-bottom: 10px;
`

const index = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    return (
        <Modal open={openModal.state} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <Image src={project?.image} />
                    <Title>{project?.title}</Title>
                    <Description>{project.description}</Description>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Chip label={tag} style={{height: "20px"}}/>
                        ))}
                    </Tags>
                    <Desc>{project?.details}</Desc>
                    {project.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member) => (
                                    <Member>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.linkedin} target="new" style={{textDecoration: 'none', color: ' #1a73e8;'}}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    <ButtonContainer>
                        {project.github && (<Button href={project?.github} target='display'>View Code</Button>)}
                        {project.webapp && (<Button href={project.webapp} target='display'>View Live App</Button>)}
                    </ButtonContainer>
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default index