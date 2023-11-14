import React, { useState } from 'react'
import styled from '@emotion/styled'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Fade } from "react-awesome-reveal";


export const Header = () => {
  const [overlayState, setOverlayState] = useState(false)
  let direction = 'down'

  return (
    <Container>
      <HeaderContainer overlayShow={overlayState}>
        <a href='#'><img src='/images/tesla-logo.svg'></img></a>
        <HeaderButtonGroup>
          <VehiclesButton>Vehicles</VehiclesButton>
          <EnergyButton>Energy</EnergyButton>
          <ChargingButton>Charging</ChargingButton>
          <DiscoverButton>Discover</DiscoverButton>
          <ShopButton>Shop</ShopButton>
        </HeaderButtonGroup>
        <RightMenu>
          <Faq style={{ fontSize: 35 }} />
          <Region style={{ fontSize: 35 }} onClick={() => setOverlayState(!overlayState)} />
          <User style={{ fontSize: 35 }} />
        </RightMenu>
      </HeaderContainer>

      <RegionNav overlayShow={overlayState}>
        <GridContainer>
          <RegionGrid>
            <Fade>
              <NAMidEastContainer>
                <NAContainer>
                  <h2>North America</h2>
                  <CountriesContainer>
                    <CountryContainer>
                      <h3>United States</h3>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Canada</h3>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                      <LocaleContainer>
                        <a href='#'>Français</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>México</h3>
                      <LocaleContainer>
                        <a href='#'>Español</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Puerto Rico</h3>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                      <LocaleContainer>
                        <a href='#'>Español</a>
                      </LocaleContainer>
                    </CountryContainer>
                  </CountriesContainer>
                </NAContainer>
                <MidEastContainer>
                  <h2>Middle-East</h2>
                  <CountriesContainer>
                    <CountryContainer>
                      <h3>ישראל</h3>
                      <LocaleContainer>
                        <a href='#'>עִברִית</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>UAE</h3>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                      <LocaleContainer>
                        <a href='#'>اَلْعَرَبِيَّةُ</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Jordan</h3>
                      <LocaleContainer>
                        <a href='#'>עִברִית</a>
                      </LocaleContainer>
                    </CountryContainer>
                  </CountriesContainer>
                </MidEastContainer>
              </NAMidEastContainer>

              <AsiaPacificContainer>
                <AsiaContainer>
                  <h2>Asia Pacific</h2>
                  <CountriesContainer>
                    <CountryContainer>
                      <h3>中国大陆</h3>
                      <LocaleContainer>
                        <a href='#'>简体中文</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Hong Kong</h3>
                      <LocaleContainer>
                        <a href='#'>繁體中文</a>
                      </LocaleContainer>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Macau</h3>
                      <LocaleContainer>
                        <a href='#'>繁體中文</a>
                      </LocaleContainer>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>台灣</h3>
                      <LocaleContainer>
                        <a href='#'>繁體中文</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>日本</h3>
                      <LocaleContainer>
                        <a href='#'>日本語</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Malaysia</h3>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Singapore</h3>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Thailand</h3>
                      <LocaleContainer>
                        <a href='#'>ภาษาไทย</a>
                      </LocaleContainer>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>대한민국</h3>
                      <LocaleContainer>
                        <a href='#'>한국어</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Australia</h3>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>New Zealand</h3>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                    </CountryContainer>
                  </CountriesContainer>
                </AsiaContainer>
              </AsiaPacificContainer>

              <EuropeContainer>
                <EuropeInnerContainer>
                  <h2>Europe</h2>
                  <EuropeCountriesContainer>
                    <CountryContainer>
                      <h3>Belgium</h3>
                      <LocaleContainer>
                        <a href='#'>Nederlands</a>
                      </LocaleContainer>
                      <LocaleContainer>
                        <a href='#'>Français</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Česko</h3>
                      <LocaleContainer>
                        <a href='#'>Čeština</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Danmark</h3>
                      <LocaleContainer>
                        <a href='#'>Dansk</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Deutschland</h3>
                      <LocaleContainer>
                        <a href='#'>Deutsch</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Ελλάδα</h3>
                      <LocaleContainer>
                        <a href='#'>Ελληνικά</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>España</h3>
                      <LocaleContainer>
                        <a href='#'>Español</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>France</h3>
                      <LocaleContainer>
                        <a href='#'>Français</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Hrvatska</h3>
                      <LocaleContainer>
                        <a href='#'>Hrvatski</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Magyarország</h3>
                      <LocaleContainer>
                        <a href='#'>Magyar</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Ireland</h3>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Ísland</h3>
                      <LocaleContainer>
                        <a href='#'>Íslenska</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Italia</h3>
                      <LocaleContainer>
                        <a href='#'>Italiano</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Luxembourg</h3>
                      <LocaleContainer>
                        <a href='#'>Français</a>
                      </LocaleContainer>
                      <LocaleContainer>
                        <a href='#'>Deutsch</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Nederland</h3>
                      <LocaleContainer>
                        <a href='#'>Nederlands</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Norge</h3>
                      <LocaleContainer>
                        <a href='#'>Norsk</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Österreich</h3>
                      <LocaleContainer>
                        <a href='#'>Deutsch</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Polska</h3>
                      <LocaleContainer>
                        <a href='#'>Polski</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Portugal</h3>
                      <LocaleContainer>
                        <a href='#'>Português</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>România</h3>
                      <LocaleContainer>
                        <a href='#'>Română</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Slovenija</h3>
                      <LocaleContainer>
                        <a href='#'>Slovenščina</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Switzerland</h3>
                      <LocaleContainer>
                        <a href='#'>Français</a>
                      </LocaleContainer>
                      <LocaleContainer>
                        <a href='#'>Deutsch</a>
                      </LocaleContainer>
                      <LocaleContainer>
                        <a href='#'>Italiano</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Sverige</h3>
                      <LocaleContainer>
                        <a href='#'>Svenska</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Suomi</h3>
                      <LocaleContainer>
                        <a href='#'>Suomi</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Türkiye</h3>
                      <LocaleContainer>
                        <a href='#'>Türkçe</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>United Kingdom</h3>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                    </CountryContainer>
                    <CountryContainer>
                      <h3>Other Europe</h3>
                      <LocaleContainer>
                        <a href='#'>English</a>
                      </LocaleContainer>
                    </CountryContainer>
                  </EuropeCountriesContainer>
                </EuropeInnerContainer>
              </EuropeContainer>
            </Fade>
          </RegionGrid>
        </GridContainer>
      </RegionNav>

      {
        overlayState && <Overlay onClick={() => setOverlayState(!overlayState)} />
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  
  img{
    width: 120px;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  min-height: 60px;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background-color: ${props => props.overlayShow ? 'white' : 'transparent'}
  
  
`
const HeaderButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px){
    display: none;
}
`
const ChargingButton = styled.div`
  font-weight: 600;
  padding: 7px 15px; 
  cursor: pointer;
  :hover{
    background: rgba(0,0,0,0.05);
    border-radius: 5px;
  }
`
const DiscoverButton = styled(ChargingButton)``
const EnergyButton = styled(ChargingButton)``
const ShopButton = styled(ChargingButton)``
const VehiclesButton = styled(ChargingButton)``

const RightMenu = styled.div`
  display: flex;
  align-items: center;
`
const Faq = styled(HelpOutlineOutlinedIcon)`
  padding: 5px;
  cursor: pointer;

  :hover{
    background: rgba(0,0,0,0.05);
    border-radius: 5px;
  }
`
const Region = styled(LanguageOutlinedIcon)`
  padding: 5px;
  cursor: pointer;

  :hover{
    background: rgba(0,0,0,0.05);
    border-radius: 5px;
  }`
const User = styled(AccountCircleOutlinedIcon)`
  padding: 5px;
  cursor: pointer;

  :hover{
    background: rgba(0,0,0,0.05);
    border-radius: 5px;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  z-index: 1;
`

const RegionNav = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;

  height: fit-content;
  max-height: 95vh;
  background: white;
  
  transform: ${props => props.overlayShow ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.5s;
`
const GridContainer = styled.div`
  width: 100vw;  
  padding-top: 120px;
  padding-bottom: 100px;
`
const RegionGrid = styled.div`
  display: grid;
  //max-width: 80vw;

  justify-content: center;
  padding: 0px 10vw;
  grid-template-columns: repeat(auto-fit, minmax(240px, fit-content));
  grid-gap: 150px;
  grid-auto-flow: column;
`

const NAMidEastContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const AsiaPacificContainer = styled(NAMidEastContainer)``
const EuropeContainer = styled(NAMidEastContainer)``

const NAContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  h2{
    font-size: 20px;
    padding: 5px 10px;
  }
`
const MidEastContainer = styled(NAContainer)`
  padding: 50px 0px;
`
const AsiaContainer = styled(NAContainer)``
const EuropeInnerContainer = styled(NAContainer)``

const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px; 
`
const EuropeCountriesContainer = styled(CountriesContainer)`
  flex-flow: row wrap;
  column-gap: 10px;
  justify-contents: center;
`

const CountryContainer = styled.div`
  display: flex;
  
  width: 240px;
  min-height: 60px;

  padding-top: 10px;
  padding-left: 10px;
  flex-flow: row wrap;
  white-space: nowrap;
  
  :hover{
    background: rgba(0,0,0,0.05);
    border-radius: 5px;
  }
  h3{
    font-size: 13.5px;
    padding-right: 100%;
  }
`
const LocaleContainer = styled.div`
  padding: 4px 0px;
  
  a{
    font-size: 12px;
    padding-right: 20px;
    text-decoration: underline 0.15em rgba(0, 0, 0, 0);
    transition: text-decoration-color 300ms;
  }
  a:hover {
    text-decoration-color: rgba(0, 0, 0, 1);
  }
`

