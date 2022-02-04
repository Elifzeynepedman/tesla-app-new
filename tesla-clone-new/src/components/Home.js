import React from 'react'
import Section from './Section'
import styled from 'styled-components'
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for Touchless Delivery"
        backGroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />   
      <Section
      title="Model Y"
      description="Order online for Touchless Delivery"
      backGroundImg="model-y.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing inventory"
      />
      <Section
      title="Model 3"
      description="Order online for Touchless Delivery"
      backGroundImg="model-3.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing inventory"
      />
      <Section
      title="Model X"
      description="Order online for Touchless Delivery"
      backGroundImg="model-x.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing inventory"
      />

      <Section
      title="Lowest Cost Solar Panel in America "
      description="Money-back guarantee"
      backGroundImg="solar-panel.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
      />

      <Section
      title="Solar Roof "
      description="Produce Clean energy From Your Roof"
      backGroundImg="solar-roof.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"
      />

      <Section
      title="Acessories "
      description=""
      backGroundImg="accessories.jpg"
      leftBtnText="Shop now"
      />


    </Container>
  )
}

const Container=styled.div`
height:100vh;
`
export default Home
