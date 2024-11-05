import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardMeal = ({
    cardtitle,
    btnshow,
    imagemealsrc,
    cardtitleimage
}) => {
    return (
        <>
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
                            textAlign: 'center'
                        }}
                    >
                        {cardtitle}
                    </Card.Title>

                    <Button variant="dark" style={{padding: '0 3rem 0 3rem'}}>
                        {btnshow}
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

CardMeal.propTypes = {
    cardtitle: PropTypes.string,
    btnshow: PropTypes.string
};

export default CardMeal;
