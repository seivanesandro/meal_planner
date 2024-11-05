import React from 'react';
//import PropTypes from 'prop-types'
import Card from '../../components/card/Card';
import styled from 'styled-components';

const ContainerMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    flex-wrap: wrap;
   
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
