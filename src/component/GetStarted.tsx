import React from 'react'
import styled from "@emotion/styled"
import {AiFillGithub} from "react-icons/ai"

interface Iprops{
  title: string;
  text: string;
  link: string;
  icon: any
}

const Container = styled.section`
background-color: white;
padding: 0 14%;
`
const Start = styled.div`
  display: flex;

`
const Wrapper = styled.div`
background-color: #FAFBFF;
`
const H2 = styled.h3``
const P = styled.p``
const A = styled.a``
const Box = styled.div``
const IconBox = styled.div``

export const LetsStart:React.FC<Iprops> = ({title, text, link, icon}) => {
  return (
    <Container>
      <Start>
      <Wrapper>
        <H2>{title}</H2>
      <P>{text}</P>
      <A>{link}</A>
      </Wrapper>
      <Box>
        <IconBox>{icon}</IconBox>
      </Box>
      </Start>
    </Container>
  )
}

export const GetStarted :React.FC= () => {
  let title1:string = "Installation"
  let title2:string = "What's new"
  let text1:string = "Learn how to install the evergreen-ui package"
  let text2: string = "Check out the latest changes and updates"
  let link1:string = "Visit installation page"
  let link2:string = "Read latest updates"

  return (
    <Container>
      <h2>Get started</h2>
      <Start>
      <Wrapper>
        <LetsStart title={title1} text={text1} link={link1} icon={<AiFillGithub/>} />
        <LetsStart title={title2} text={text2} link={link2} icon={<AiFillGithub/>} />
      </Wrapper>
      </Start>
      

    </Container>
  )
}

export default GetStarted