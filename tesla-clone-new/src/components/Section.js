import React from 'react'
import styled from 'styled-components'

function Section({title,description,leftBtnText,rightBtnText,backGroundImg}) {

  return (
    <Wrap bgImage={backGroundImg}>
      <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
      </ItemText>

      <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          {rightBtnText && 
           <RightButton>
            {rightBtnText}
          </RightButton>}
         
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg"/>
    </Wrap>
  )
}
const Wrap=styled.div`
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
