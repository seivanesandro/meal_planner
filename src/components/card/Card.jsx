import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled, {
    keyframes
} from 'styled-components';

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
const StyleCard = styled.div`
    animation: ${Show} 2.5s ease-out;
    &:focus {
        box-shadow: 0 0 0.5rem gold;
    }
    &:hover {
        box-shadow: 0 0 0.5rem gold;
    }
`;

const CardMeal = ({
    cardtitle,
    btnshow,
    imagemealsrc,
    cardtitleimage
}) => {
    return (
        <>
            <StyleCard className="style-card">
                <Card style={{ width: '15rem' }}>
                    <Card.Img
                        variant="top"
                        src={imagemealsrc}
                        alt={cardtitleimage}
                    />
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-3">
                        <Card.Title
                            style={{
                                fontSize: '1rem',
                                textAlign:
                                    'center'
                            }}
                        >
                            {cardtitle}
                        </Card.Title>

                        <Button
                            variant="dark"
                            style={{
                                padding:
                                    '0 3rem 0 3rem'
                            }}
                        >
                            {btnshow}
                        </Button>
                    </Card.Body>
                </Card>
            </StyleCard>
        </>
    );
};

CardMeal.propTypes = {
    cardtitle: PropTypes.string,
    btnshow: PropTypes.string
};

export default CardMeal;
