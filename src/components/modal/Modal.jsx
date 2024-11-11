import React from 'react';
import Button from 'react-bootstrap/esm/Button';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { devices } from '../../utils/constantes';

import Table from 'react-bootstrap/Table';

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

const ShowScale = keyframes`
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1,1);
  }

`;
const ContainerDisher = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
`;
const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    border-radius: 6px;
    animation:
        ${Show} 0.7s ease-in,
        ${ShowScale} 1s ease-out;
`;
const CloseModal = styled.div`
    text-align: end;
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;
    &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    &:hover {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`;
const ContainerImageTitleIngredients = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 4rem auto;
`;
const ContainerImageIngredients = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 7rem;

    @media only screen and (${devices.portatil}) {
        flex-direction: column;
        gap: 3rem;
    }
    @media only screen and (${devices.portatilS}) {
        flex-direction: column;
        gap: 3rem;
    }
    @media only screen and (${devices.tablet}) {
        flex-direction: column;
        gap: 3rem;
    }
    @media only screen and (${devices.iphone14}) {
        flex-direction: column;
    }
    @media only screen and (${devices.mobileG}) {
        flex-direction: column;
        gap: 3rem;
    }
    @media only screen and (${devices.mobileM}) {
        flex-direction: column;
        gap: 3rem;
    }
    @media only screen and (${devices.mobileP}) {
        flex-direction: column;
        gap: 3rem;
    }
`;

const DishesTitle = styled.h4`
    &.item-title-dishes {
        font-weight: 700;
        text-align: center;
        font-size: 2.5rem;
    }
    &.item-title-Ingredients {
        font-weight: 700;
        text-align: start;
    }

    &.item-title-nutrients {
        font-weight: 700;
        text-align: center;
    }

    @media only screen and (${devices.tablet}) {
        &.item-title-dishes {
            font-weight: 700;
            text-align: center;
            font-size: 2rem;
        }
        &.item-title-nutrients {
            text-align: start;
        }
    }
    @media only screen and (${devices.iphone14}) {
        &.item-title-dishes {
            font-size: 1.5rem;
        }
        &.item-title-nutrients {
            text-align: start;
        }
    }
    @media only screen and (${devices.mobileG}) {
        &.item-title-dishes {
            font-size: 1.5rem;
        }
        &.item-title-nutrients {
            text-align: center;
        }
    }
    @media only screen and (${devices.mobileM}) {
        &.item-title-dishes {
            font-size: 1.3rem;
        }
        &.item-title-nutrients {
            text-align: center;
        }
    }
    @media only screen and (${devices.mobileP}) {
        &.item-title-dishes {
            font-size: 1.3rem;
            text-align: start;
        }
        &.item-title-nutrients {
            text-align: center;
        }
    }
`;
const StyledImageDishes = styled.img`
    width: 490px;
    &:hover {
        box-shadow: 0 0 0.2rem #333 !important;
    }
`;

const ContainerAnalyzedIngredients = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

    @media only screen and (${devices.iphone14}) {
        margin-left: 2rem;
    }
    @media only screen and (${devices.mobileG}) {
        margin-left: 2rem;
    }
    @media only screen and (${devices.mobileM}) {
        margin-left: 1rem;
    }
    @media only screen and (${devices.mobileP}) {
        margin-left: 0;
    }
`;

const ContainerNutrients = styled.div``;
//const ContainerItemsNutrients = styled.div``;

const ContainerAnalyzedInstructions = styled.div``;

const Modal = ({ item, show, onClose }) => {
    if (!show || item === null) {
        return null;
    } else {
        return (
            <>
                <ContainerDisher
                    id="dish"
                    className="container-disher"
                >
                    <ModalContent className="modal-content shadow">
                        <CloseModal
                            className="close-modal"
                            onClick={onClose}
                        >
                            <AiOutlineClose
                                className="close-btn "
                                style={{
                                    background:
                                        '#F5F5F5',
                                    border: '1px solid #f5f5f5'
                                }}
                            />
                        </CloseModal>

                        <ContainerImageTitleIngredients className="container-image-title-ingredients">
                            <DishesTitle className="item-title-dishes">
                                {item.title}
                            </DishesTitle>
                            <ContainerImageIngredients className="container-image-ingredients">
                                <StyledImageDishes
                                    className="image img-fluid rounded shadow"
                                    src={
                                        item.image
                                    }
                                    alt={
                                        item.title
                                    }
                                />
                                <ContainerAnalyzedIngredients className="container-analyzed-ingredients">
                                    <DishesTitle className="item-title-Ingredients">
                                        Ingredients
                                    </DishesTitle>
                                    <ul>
                                        {item.nutrition.ingredients.map(
                                            ingredient => {
                                                return (
                                                    <li
                                                        key={
                                                            ingredient.id
                                                        }
                                                        className="text-start m-0"
                                                        style={{
                                                            listStyle:
                                                                'square'
                                                        }}
                                                    >
                                                        <Button
                                                            variant="light"
                                                            className="style-font-size"
                                                            style={{
                                                                textTransform:
                                                                    'uppercase'
                                                            }}
                                                        >
                                                            {
                                                                ingredient.name
                                                            }
                                                        </Button>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </ContainerAnalyzedIngredients>
                            </ContainerImageIngredients>
                        </ContainerImageTitleIngredients>

                        <ContainerNutrients className="container-nutrients">
                            <DishesTitle className="item-title-nutrients">
                                Nutrients info
                                table
                            </DishesTitle>
                        </ContainerNutrients>

                        <Table
                            responsive="sm"
                            striped
                            bordered
                            hover
                            size="sm"
                        >
                            <tbody>
                                <tr>
                                    <td className="style-td bg-danger font-weight-bold">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[0]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td font-weight-normal">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[0]
                                                .amount
                                        }
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
                                    </td>

                                    <td className="style-td bg-warning font-weight-bold">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[0]
                                                .percentOfDailyNeeds
                                        }
                                        mg
                                    </td>
                                </tr>

                                <tr>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[1]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[1]
                                                .amount
                                        }
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
                                    </td>
                                    <td className="style-td">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[1]
                                                .percentOfDailyNeeds
                                        }
                                        mg
                                    </td>
                                </tr>

                                <tr>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[2]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[2]
                                                .amount
                                        }
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
                                    </td>
                                    <td className="style-td">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[2]
                                                .percentOfDailyNeeds
                                        }
                                        mg
                                    </td>
                                </tr>

                                <tr>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[3]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[3]
                                                .amount
                                        }
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
                                    </td>
                                    <td className="style-td">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[3]
                                                .percentOfDailyNeeds
                                        }
                                    </td>
                                </tr>

                                <tr>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[5]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[5]
                                                .amount
                                        }
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
                                    </td>
                                    <td className="style-td">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[5]
                                                .percentOfDailyNeeds
                                        }
                                        mg
                                    </td>
                                </tr>

                                <tr>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[6]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[6]
                                                .amount
                                        }
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
                                    </td>
                                    <td className="style-td">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[6]
                                                .percentOfDailyNeeds
                                        }
                                        mg
                                    </td>
                                </tr>

                                <tr>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[10]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[10]
                                                .amount
                                        }
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
                                    </td>
                                    <td className="style-td">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[10]
                                                .percentOfDailyNeeds
                                        }
                                        mg
                                    </td>
                                </tr>

                                <tr>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[11]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[11]
                                                .amount
                                        }
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
                                    </td>
                                    <td className="style-td">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[11]
                                                .percentOfDailyNeeds
                                        }
                                        mg
                                    </td>
                                </tr>

                                <tr>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[16]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[16]
                                                .amount
                                        }
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
                                    </td>
                                    <td className="style-td">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[16]
                                                .percentOfDailyNeeds
                                        }
                                        mg
                                    </td>
                                </tr>

                                <tr>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[21]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[21]
                                                .amount
                                        }
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
                                    </td>
                                    <td className="style-td">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[21]
                                                .percentOfDailyNeeds
                                        }
                                        mg
                                    </td>
                                </tr>

                                <tr>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[25]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[25]
                                                .amount
                                        }
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
                                    </td>
                                    <td className="style-td">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[25]
                                                .percentOfDailyNeeds
                                        }
                                        mg
                                    </td>
                                </tr>

                                <tr>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[26]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[26]
                                                .amount
                                        }
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
                                    </td>
                                    <td className="style-td">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[26]
                                                .percentOfDailyNeeds
                                        }
                                        mg
                                    </td>
                                </tr>

                                <tr>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[29]
                                                .name
                                        }
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[29]
                                                .amount
                                        }
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
                                    </td>
                                    <td className="style-td">
                                        Percent of
                                        Daily Need
                                    </td>
                                    <td className="style-td">
                                        {
                                            item
                                                .nutrition
                                                .nutrients[29]
                                                .percentOfDailyNeeds
                                        }
                                        mg
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <ContainerAnalyzedInstructions className="container-analyzed-instructions">
                            <DishesTitle>
                                Instructions to
                                Cook:
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
                    </ModalContent>
                </ContainerDisher>
            </>
        );
    }
};

Modal.propTypes = {};

export default Modal;
