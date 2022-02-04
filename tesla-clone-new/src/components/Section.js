import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Section({title,description,leftBtnText,rightBtnText,backGroundImg}) {

  return (
    <Wrap bgImage={backGroundImg}>
      <Fade bottom>
      <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
      </ItemText>
      </Fade>
      <ButtonGroup>
          <Slide left >
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          </Slide>

          {rightBtnText &&        
           <Slide right >
            <RightButton>
            {rightBtnText}
            </RightButton>  
           </Slide>
}
         
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg"/>
    </Wrap>
  )
}
const Wrap=styled.div`
z-index:10;
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-image: ${props=>`url("/images/${props.bgImage}")`};
display: flex; 
flex-direction: column; 
justify-content: space-between;
align-items: center;

`

const ItemText=styled.div`
padding-top: 15vh;
text-align: center;
`

const ButtonGroup=styled.div`
display: flex;
margin-top: 160px;

`

const LeftButton=styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.99;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`

const RightButton=styled(LeftButton)`
background-color: white;
color: black;
 opacity: 0.65;
`
const DownArrow=styled.img`
height: 40px;
overflow-x: hidden ;
animation: animateDown infinite 1.5s;

`

export default Section
