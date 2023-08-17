import React from 'react'
import styled from "@emotion/styled"

const But = styled.button`
    padding: 7px 20px;
    background-color: #3366FF;
    color: white;
    font-family: CustomFont;
    font-weight: bolder;
    border: 1px solid silver;
    border-radius: 4px;
:hover{
  background-color: #2952cc;
}
`
const Button:React.FC = () => {
  return (
    <But>Get Started</But>
  )
}

export default Button