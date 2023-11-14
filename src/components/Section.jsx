import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";

export const Section = ({title, desc, bgImage, leftBtnText, rightBtnText}) => {
  return (
    <Wrap bg = {bgImage}>
        <Fade direction='up'>
            <ItemText>
                <h1>{title}</h1>
                <pre>{desc}</pre>
            </ItemText>
        </Fade>
        <ButtonGroup>
            <Fade direction='left'>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
            </Fade>
            <Fade direction='right'>
                {rightBtnText && 
                    <RightButton>
                        {rightBtnText}  
                    </RightButton>
                }
            </Fade>
        </ButtonGroup>
    </Wrap>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url('/images/${props.bg}')`};
    display: flex;
    flex-direction: column;             //flips alignment with align-items
    justify-content: space-between;     //max space between components
    align-items: center;
    scroll-snap-align: start;
`
const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh;
    
    pre{
        padding-top: 10px;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-top: 90vh;
    position: fixed;
    @media (max-width: 768px){
        flex-direction: column
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    margin: 14px;
    @media (max-width: 768px){
        width: 85vw;
        margin: 10px;
    }
`

const RightButton = styled(LeftButton)`
    background-color: rgba(244, 244, 244, 0.65);
    color: #393c41;
`