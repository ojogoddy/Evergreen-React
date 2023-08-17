import React from 'react'
import styled from "@emotion/styled"
import {AiFillGithub} from "react-icons/ai"
import {GiSpanner} from "react-icons/gi"
import {ImOffice} from "react-icons/im"



interface Iprops {
  icon: any;
  title: string;
  text: string
}

const Container = styled.section`
background-color: white;
padding: 0 14%;
margin-bottom: 40px;
h3{
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 40px;
}
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  `
  const H2 = styled.h4``;
  const Box = styled.div``
  const IconBox = styled.div`
  height: 50px;
  width: 50px;
  background-color: #ebf0ff;
  color: #386aff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  `;
  const P=styled.p`
  width: 300px;
  `
export const CoreCard:React.FC<Iprops> = ({icon,title, text}) => {
  return(
    <Box>
      <IconBox>{icon}</IconBox>
      <H2>{title}</H2>
      <P>{text}</P>
    </Box>
  )
}

export const CoreValues :React.FC = () => {
  
  let title1:string = "Works out of the box"
  let title2:string = "Flexible and composable"
  let title3:string = "Enterprise-grade"
  let text1:string = "Evergreen contains a set of polished React components that work out of the box."
  let text2:string = "Evergreen components are built on top of a React UI Primitive for endless composability."
  let text3:string = "Evergreen features a UI design language for enterprise-grade web applications."

  return (
    <Container>
      <h3>Core Values</h3>
      <Wrapper>
        <CoreCard icon={<AiFillGithub/>} title={title1} text={text1} />
        <CoreCard icon={<GiSpanner/>} title={title2} text={text2} />
        <CoreCard icon={<ImOffice/>} title={title3} text={text3} />
      </Wrapper>
    </Container>
  )
}
