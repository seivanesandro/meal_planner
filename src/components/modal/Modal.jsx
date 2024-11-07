import React from 'react';
import Button from 'react-bootstrap/esm/Button';
//import PropTypes from 'prop-types'
import styled from 'styled-components';

const ContainerDisher = styled.div``;
const DishesTitle = styled.h4``;
const ContainerImageDishes = styled.div``;
const StyledImageDishes = styled.img``;
const ContainerAnalyzedIngredients = styled.div``;
const ContainerNutrients = styled.div``;
const ContainerItemsNutrients = styled.div``;
const ContainerAnalyzedInstructions = styled.div``;

const Modal = ({ item, show }) => {
    if (show === false || item === null) {
        return null;
    } else {
        return (
            <>
                <ContainerDisher
                    id="dish"
                    className="container-disher"
                >
                    <ContainerImageDishes className="container-image">

                        <DishesTitle className="item-title">
                            {item.title}
                        </DishesTitle>

                        <StyledImageDishes
                            className="image"
                            src={item.image}
                            alt={item.title}
                        />

                        <ContainerAnalyzedIngredients className="container-analyzed-ingredients">
                            <DishesTitle>
                                Ingredients:
                            </DishesTitle>
                            <Button variant="info">
                                <ul>
                                    {item.nutrition.ingredients.map(
                                        ingredient => {
                                            return (
                                                <li
                                                    key={
                                                        ingredient.id
                                                    }
                                                    className="text-start m-3"
                                                    style={{
                                                        listStyle:
                                                            'square'
                                                    }}
                                                >
                                                    {
                                                        ingredient.name
                                                    }
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </Button>
                        </ContainerAnalyzedIngredients>

                    </ContainerImageDishes>

                    <ContainerNutrients className="container-nutrients">
                        <DishesTitle>
                            Nutrients info table:
                        </DishesTitle>

                        <ContainerItemsNutrients className="item-calories">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[0]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[0]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[0]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[0]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>

                        <ContainerItemsNutrients className="item-fat">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[1]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[1]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[1]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[1]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>

                        <ContainerItemsNutrients className="item-saturated-fat">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[2]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[2]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[2]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[2]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>

                        <ContainerItemsNutrients className="item-Carbohydrates">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[3]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[3]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[3]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[3]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>

                        <ContainerItemsNutrients className="item-sugar">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[5]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[5]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[5]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[5]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>

                        <ContainerItemsNutrients className="item-cholesterol">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[6]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[6]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[6]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[6]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>

                        <ContainerItemsNutrients className="item-protein">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[10]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[10]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[10]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[10]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>

                        <ContainerItemsNutrients className="item-vitamin-C">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[11]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[11]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[11]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[11]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>

                        <ContainerItemsNutrients className="item-calcium">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[16]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[16]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[16]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[16]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>

                        <ContainerItemsNutrients className="item-fiber">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[21]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[21]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[21]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[21]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>

                        <ContainerItemsNutrients className="item-zinc">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[25]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[25]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[25]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[25]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>

                        <ContainerItemsNutrients className="item-magnesium">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[26]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[26]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[26]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[26]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>

                        <ContainerItemsNutrients className="item-iron">
                            <>
                                <Button variant="danger">
                                    {
                                        item
                                            .nutrition
                                            .nutrients[29]
                                            .name
                                    }
                                    :
                                </Button>
                                <Button variant="warning">
                                    <span>
                                        {
                                            item
                                                .nutrition
                                                .nutrients[29]
                                                .amount
                                        }
                                    </span>
                                    {
                                        item
                                            .nutrition
                                            .nutrients[29]
                                            .unit
                                    }{' '}
                                    per{' '}
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .amount
                                    }
                                    {
                                        item
                                            .nutrition
                                            .weightPerServing
                                            .unit
                                    }
                                </Button>
                                <Button variant="success">
                                    Percent of
                                    Daily Need -{' '}
                                    {
                                        item
                                            .nutrition
                                            .nutrients[29]
                                            .percentOfDailyNeeds
                                    }
                                    mg
                                </Button>
                            </>
                        </ContainerItemsNutrients>
                    </ContainerNutrients>

                    <ContainerAnalyzedInstructions className="container-analyzed-instructions">
                        <DishesTitle>
                            Instructions to Cook:
                        </DishesTitle>
                        <ul style={{}}>
                            {item.analyzedInstructions[0].steps.map(
                                step => {
                                    return (
                                        <li
                                            key={
                                                step.number
                                            }
                                            style={{
                                                listStyle:
                                                    'square'
                                            }}
                                        >
                                            {
                                                step.step
                                            }
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </ContainerAnalyzedInstructions>
                </ContainerDisher>
            </>
        );
    }
};

Modal.propTypes = {};

export default Modal;
