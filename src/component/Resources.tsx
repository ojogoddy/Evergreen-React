import React from 'react'
import styled from "@emotion/styled"
import brand from "../assets/brand.svg"
import figma from "../assets/figma.svg"

interface Iprops{
  icon: any;
  text: string
}

const Container = styled.section`
margin-top: 40px;
margin-bottom: 40px;
padding-top: 20px;
background-color: #FAFBFF;

h3, p{
  padding: 0px 14%;
}
`
const Box = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 16px;
border: 1px solid #d8dae5;
padding: 1px 160px 1px 30px;
border-radius: 8px;
font-size: 14px;
font-weight: 400;
margin-top: 30px;


img{
  width: 25px;
  height: 25px;
}
`
const IconBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 20px;
padding:  0 14%;
h3{
  width: 300px;
}
`
const H4 = styled. h3``
export const ResourceCard:React.FC<Iprops> = ({icon, text}) =>{
  return (
    <Box>
      <img src={icon}/>
      <H4>{text} </H4>
    </Box>
  )
}

export const Resources :React.FC= () => {
  let text1:string = "Evergreen Figma Library"
  let text2:string = "Segment Brand Hub"

  return (
    <Container>
      <h3>Resources</h3>
      <p>A collection of tools, Kits, plugins and guides to help simplify the creation process for our users. <a>See all resources</a></p>
      <IconBox>
      <ResourceCard icon={figma} text={text1} />
      <ResourceCard icon={brand} text={text2} />
      </IconBox>
    </Container>
  )
}

export default Resources