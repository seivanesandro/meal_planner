import React from 'react';
//import PropTypes from 'prop-types'
import Card from '../../components/card/Card';
import styled, { keyframes } from 'styled-components';

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

const ContainerMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    flex-wrap: wrap;
    animation: ${Show} 2.5s ease-out;
    &:focus {
        box-shadow: 0 0 0.5rem gold;
    }
    &:hover {
        box-shadow: 0 0 0.5rem gold;
    }
`;

const Main = ({ recipes }) => {
    return (
        <ContainerMain className="container-main">
            {recipes &&
                recipes.map(recipe => {
                    return (
                        <Card
                            key={recipe.id}
                            imagemealsrc={
                                recipe.image
                            }
                            cardtitleimage={
                                recipe.title
                            }
                            cardtitle={
                                recipe.title
                            }
                            btnshow="Show"
                        />
                    );
                })}
        </ContainerMain>
    );
};

Main.propTypes = {};

export default Main;
