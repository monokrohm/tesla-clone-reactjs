import React from 'react'
import styled from 'styled-components'
import { Section } from './Section'

export const Home = () => {
  return (
    <Container>
      <Section
        title='Model 3'
        desc={['For Immediate Delivery,', <br />, 'Explore ', <a href='#'>Existing Inventory</a>, ' and ', <a href='#'>Used Inventory</a>]}
        bgImage='model-3.avif'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Model Y'
        desc={<a href='#'>Explore Inventory</a>}
        bgImage='model-y.avif'
        leftBtnText='Order Now'
        rightBtnText='Test Drive'
      />
      <Section
        title='Solar and Powerwall'
        desc={['Rebates are now available in selected states on Powerwall and solar. ', <a href='#'>Learn more</a>]}
        bgImage='solar.avif'
        leftBtnText='Learn More'
      />
      <Section
        title='Accessories'
        bgImage='charger.avif'
        leftBtnText='Shop Now'
      />
    </Container>
  )
}

const Container = styled.div`
      height: 100vh;
      overflow-y: scroll;
      scroll-snap-type: y mandatory;
      `