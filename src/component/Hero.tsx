import React from 'react'
import Button from './Button'
import styled from '@emotion/styled'
import hero from "../assets/hero.png"

const Container=styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 90vh;
gap: 50px;
background-color: #FAFBFF;

`
const Left=styled.div`
h4{
  font-size: 34px;
  font-weight: 800;
  margin: 0;
}
`
const Para=styled.p`
width: 450px;
font-size: 16px;
line-height: 24px;
margin-top: 16px;
margin-bottom: 24px;
`
const Right=styled.div``
const Img=styled.img``


export const Hero :React.FC= () => {
  return (
    <Container>
      <Left>
        <h4>Meet Evergreen, <br/> Segment's design system </h4>
        <Para>
          Evergreen is a React UI Framework for building ambitious product on the web. Brought to you by segment
        </Para>
        <Button/>
      </Left>
      <Right>
        <Img src={hero} />
      </Right>
    </Container>
  )
}
