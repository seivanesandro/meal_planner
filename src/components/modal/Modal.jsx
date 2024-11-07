import React from 'react';
import Button from 'react-bootstrap/esm/Button';
//import PropTypes from 'prop-types'
import styled from 'styled-components';

const Modal = ({ item, show }) => {
    if (show === false || item === null) {
        return null;
    } else {
        return (
            <>
                <div id="dish">
                    <h4 className="item-title">
                        {item.title}
                    </h4>
                    <div className="item-image">
                        <img
                            className="image"
                            src={item.image}
                            alt={item.title}
                        />
                    </div>
                    <div className="analyzed-ingredients">
                        <h4>Ingredients:</h4>
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
                    </div>

                    <div className="item-calories">
                        <h4>
                            Nutrients info table:
                        </h4>
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[0]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[0]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="item-fat">
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[1]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[1]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="item-saturated-fat">
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[2]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[2]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="item-Carbohydrates">
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[3]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[3]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="item-sugar">
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[5]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[5]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="item-cholesterol">
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[6]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[6]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="item-protein">
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[10]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[10]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="item-vitamin-C">
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[11]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[11]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="item-calcium">
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[16]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[16]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="item-fiber">
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[21]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[21]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="item-zinc">
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[25]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[25]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="item-magnesium">
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[26]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[26]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="item-iron">
                        <p>
                            <Button variant="danger">
                                {
                                    item.nutrition
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
                                    item.nutrition
                                        .nutrients[29]
                                        .unit
                                }{' '}
                                per{' '}
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .amount
                                }
                                {
                                    item.nutrition
                                        .weightPerServing
                                        .unit
                                }
                            </Button>
                            <Button variant="success">
                                Percent of Daily
                                Need -{' '}
                                {
                                    item.nutrition
                                        .nutrients[29]
                                        .percentOfDailyNeeds
                                }
                                mg
                            </Button>
                        </p>
                    </div>

                    <div className="analyzed-instructions">
                        <h4>
                            Instructions to Cook:
                        </h4>
                        {item.analyzedInstructions[0].steps.map(
                            step => {
                                return (
                                    <p
                                        key={
                                            step.number
                                        }
                                    >
                                        {
                                            step.step
                                        }
                                    </p>
                                );
                            }
                        )}
                    </div>
                </div>
            </>
        );
    }
};

Modal.propTypes = {};

/* 
results[0].nutrition.nutrients[0].name;
results[0].nutrition.nutrients[0].amount;
results[0].nutrition.nutrients[0].unit;
results[0].nutrition.nutrients[0].percentOfDailyNeeds;
results[0].nutrition.weightPerServing.amount;
results[0].nutrition.weightPerServing.unit; */

export default Modal;
