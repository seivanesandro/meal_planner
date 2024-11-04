import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';
//import PropTypes from 'prop-types';
//import Button from 'react-bootstrap/Button';
import Loading from '../../components/load/Loading'
import Form from 'react-bootstrap/Form';
import styled, {
    keyframes
} from 'styled-components';
import hero from '../../assets/hero.jpg';
import { devices } from '../../utils/constantes';

const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;
const ContainerHero = styled.div`
    max-width: 100%;
    height: 89vh;
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
    animation: ${Show} 1s linear;
`;
const StyledHeroTitle = styled.h4`
    font-family: Luminari, fantasy;
    font-size: 5rem !important;
    animation: ${Show} 3s ease-out;

    @media only screen and (${devices.iphone14}) {
        font-size: 4.1rem !important;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 4.1rem !important;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 3.1rem !important;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 3.1rem !important;
    }
`;
const StyledHeroParagraph = styled.p`
    font-family:
        Comic Sans MS,
        cursive;
    font-size: 2.1rem !important;
    animation: ${Show} 2s ease-out;

    @media only screen and (${devices.iphone14}) {
        font-size: 1.3rem !important;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1.3rem !important;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 1.2rem !important;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 1rem !important;
    }
`;

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

const Home = props => {
    const [meal, setMeal] = useState('');
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] =
        useState(false);
    const [error, setError] = useState(null);

    const handleSearchChange = event => {
        setMeal(event.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (meal) {
                // apenas pesquisa se houver um valor em 'meal'
                setIsLoading(true);
                try {
                    const response =
                        await axios.get(
                            `${apiUrl}`,
                            {
                                params: {
                                    apiKey:
                                        `${apiKey}`,
                                    query: meal,
                                    number: 1,
                                    addRecipeNutrition: true,
                                    instructionsRequired: true,
                                    addRecipeInformation: true
                                }
                            }
                        );
                    setRecipe(
                        response.data.results[0]
                    );
                } catch (error) {
                    setError(error);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchData();
    }, [meal]); // Executa 1x em cada mudança no 'meal'


    return (
        <div className="home-page">
            <header className="home">
                <ContainerHero className="hero">
                    <ContainerHeroBanner className="hero-banner">
                        <StyledHeroTitle className="outhero-title">
                            Meal planner
                        </StyledHeroTitle>
                        <StyledHeroParagraph className="hero-paragraph">
                            "Tell me what you eat,
                            and I will tell you
                            who you are.."
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
                                aria-label="Search"
                                value={meal}
                                onChange={
                                    handleSearchChange
                                }
                            />
                        </Form>
                    </ContainerHeroBanner>
                </ContainerHero>
            </header>
            <div className="main-page">
                {/* Exibir resultados, loading ou erro */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '3rem',
                    }}
                >
                    {isLoading && <Loading />}

                    {error && (
                        <div>
                            Erro: {error.message}
                        </div>
                    )}
                </div>
                {/* {recipe && (
                    <div>
                        <h1>{recipe.title}</h1>
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                        />
                        // Exibir outras informações da receita 
                    </div>
                )} */}
            </div>
        </div>
    );
};

Home.propTypes = {};

export default Home;
