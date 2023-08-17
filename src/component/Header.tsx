// import React from 'react'
// import styled from '@emotion/styled'

// const Containter= styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 70px;
//   width:100%;
//   padding: 0 ;
//   background-color: #041937;
//   position: fixed;
//   top: 0;
//   right: 0;
//   color: white;
//   cursor: pointer;
// `
// const Logo =styled.div`
//   font-size: 20px;
//   font-weight: 800;
// `
// const Navigation=styled.div`
// display: flex;
// gap: 25px;  
// `

// const But =styled.button`
// padding: 10px 25px;
// border-bottom-left-radius: 20px;
// border-top-left-radius: 20px;
// background-color: transparent;
// color: white;
// border: 1px solid white;
// :hover{
//   border: 1px solid skyblue;
//   color: skyblue;
// }
// `
// const Button = styled.button`
//   position: relative;
//   padding: 10px 20px;
//   background-color: #007bff; /* Change to your preferred background color */
//   color: white;
//   border: none;
//   font-size: 16px;
//   cursor: pointer;
//   overflow: hidden;
//   ::before{
//     content: "{"; /* Unicode code for left curly brace */
//   position: absolute;
//   left: -20px; /* Adjust the positioning as needed */
//   font-size: 24px;
//   line-height: 1;
//   }
// `


// const Header:React.FC = () => {
//   return (
//    <Containter>
//     <Logo>JAGO</Logo>
//     <Navigation>
//       <nav>Home</nav>
//       <nav>Service</nav>
//       <nav>About Us</nav>
//       <nav>Contact Us</nav>
//     </Navigation>
//     <But>Book Now</But>
//     <Button>Book Now</Button>
//    </Containter>
//   )
// }

// export default Header