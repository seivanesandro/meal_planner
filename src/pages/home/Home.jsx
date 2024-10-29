import React from 'react'
//import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import hero from '../../assets/hero.jpg'
//import { devices } from '../../utils/constantes';

const ContainerHero = styled.div`
    max-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${hero}) !important;
    object-fit: fill !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    width: 100%;

    
`;
const ContainerHeroBanner = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px #333 !important;
    gap: 2rem;
`;
const StyledHeroTitle = styled.h4``;
const StyledHeroParagraph = styled.p``;

const Home = props => {
  return (
      <>
          <header className="home">
              <ContainerHero className="hero">
                  <ContainerHeroBanner className="hero-banner">
                      <StyledHeroTitle className="outhero-title">
                          Meal planner
                      </StyledHeroTitle>
                      <StyledHeroParagraph className="hero-paragraph">
                          "Tell me what you eat,
                          and I will tell you who
                          you are.."
                      </StyledHeroParagraph>
                      <Form
                          style={{
                              display: 'flex',
                              flexDirection:
                                  'column',
                              justifyContent:
                                  'center',
                              alignItems:
                                  'center',
                              gap: '2rem'
                          }}
                      >
                          <Form.Control
                              type="search"
                              placeholder="Search..."
                              variant="dark"
                              className="hero-input text-center me-2 rounded-4"
                              styled={{
                                  outline: 'none'
                              }}
                              aria-label="Search"
                              onChange={() => {
                                  console.log(
                                      'get input target'
                                  );
                              }}
                          />
                          <Button
                              variant="light"
                              className="hero-btn px-5 rounded-4 shadow text-dark"
                              style={{fontWeight: '500',}}
                              onClick={() => {
                                  console.log(
                                      'click for search'
                                  );
                              }}
                          >
                              Search
                          </Button>
                      </Form>
                  </ContainerHeroBanner>
              </ContainerHero>
          </header>
      </>
  );
}

Home.propTypes = {}

export default Home