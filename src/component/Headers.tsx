import React from 'react'
import styled from "@emotion/styled";
import evergreen from "../assets/evergreen.svg"


const Container = styled.header`
height: 70px;
width: 100%;
background-color: white;
position: fixed;
top: 0;
display: flex;
align-items: center;
justify-content: space-between;
box-shadow: rgba(27, 31, 35, 0.15)0px 0px 0px 1px;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
`
const Logo = styled.div`
margin-right: 60px;
margin-left: 30px;

img{
  width: 100px;
}

`
const Navigation = styled.div`
display: flex;
align-items: center;
`
const Nav = styled.div`
margin-left: 25px;
font-size: 15px;
color: rgba(0, 0, 0, 0.7);
transition: all 350ms;
cursor: pointer;

:hover{
  color: black;
}

`
const GitHub = styled.div`
margin-right: 30px;
display: flex;
gap: 10px;
`
const Hold = styled.div`
display: flex;
padding: 5px 10px;
border-radius: 3px;
background-color: #bebebe;
font-size: 13px;
`
const Icon = styled.div`
font-size: 15px;
`
const Text = styled.div`
font-weight: bold;
`
const Digit = styled.div`
background-color: #bebebe;
font-size: 13px;
padding: 5px;
border-radius: 3px;
`
const Count = styled.div`
font-weight: bold;
`

const Headers:React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo><img src={evergreen}/></Logo>
        <Navigation>
          <Nav>Home</Nav>
          <Nav>Foundation</Nav>
          <Nav>Components</Nav>
          <Nav>Pattern</Nav>
          <Nav>Resource</Nav>
        </Navigation>
      </Wrapper>
      <GitHub>
        <Hold>
          <Icon></Icon>
          <Text>Star</Text>
        </Hold>
        <Digit>
          <Count>12201</Count>
        </Digit>
      </GitHub>
    </Container>
  )
}

export default Headers