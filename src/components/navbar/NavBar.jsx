import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBarInfo = ( {calories, fat, carb, protein}) => {
     const caloriesFixed = calories.toFixed(2);
     const fatFixed = fat.toFixed(2);
     const carbFixed = carb.toFixed(2);
     const proteinFixed = protein.toFixed(2);
    return (
        <>
            {['sm'].map(expand => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className="bg-body-tertiary my-5"
                    variant="light"
                >
                    <Container fluid>
                        <Navbar.Brand
                            style={{
                                textDecoration:
                                    'none',
                                cursor: 'help'
                            }}
                        >
                            Meal App
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header
                                closeButton
                            >
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                    style={{
                                        textDecoration:
                                            'none',
                                        cursor: 'help'
                                    }}
                                >
                                    Meal App
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body variant="light">
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link
                                        style={{
                                            textDecoration:
                                                'none'
                                        }}
                                    >
                                        <Button
                                            variant="danger"
                                            style={{
                                                textTransform:
                                                    'uppercase',
                                                fontWeight: 550,
                                                cursor: 'help'
                                            }}
                                        >
                                            Calories:{' '}
                                            <span
                                                style={{
                                                    fontWeight: 400,
                                                    color: 'white',
                                                    textTransform:
                                                        'lowercase'
                                                }}
                                            >
                                                {
                                                    caloriesFixed
                                                }
                                                Kcal
                                            </span>
                                        </Button>
                                    </Nav.Link>

                                    <Nav.Link
                                        style={{
                                            textDecoration:
                                                'none'
                                        }}
                                    >
                                        <Button
                                            variant="danger"
                                            style={{
                                                textTransform:
                                                    'uppercase',
                                                fontWeight: 550,
                                                cursor: 'help'
                                            }}
                                        >
                                            Fat:{' '}
                                            <span
                                                style={{
                                                    fontWeight: 400,
                                                    color: 'white',
                                                    textTransform:
                                                        'lowercase'
                                                }}
                                            >
                                                {
                                                    fatFixed
                                                }
                                                g
                                            </span>
                                        </Button>
                                    </Nav.Link>
                                    <Nav.Link
                                        style={{
                                            textDecoration:
                                                'none'
                                        }}
                                    >
                                        <Button
                                            variant="primary"
                                            style={{
                                                textTransform:
                                                    'uppercase',
                                                fontWeight: 550,
                                                cursor: 'help'
                                            }}
                                        >
                                            {' '}
                                            Carb:{' '}
                                            <span
                                                style={{
                                                    fontWeight: 400,
                                                    color: 'white',
                                                    textTransform:
                                                        'lowercase'
                                                }}
                                            >
                                                {
                                                    carbFixed
                                                }
                                                g
                                            </span>
                                        </Button>
                                    </Nav.Link>
                                    <Nav.Link
                                        style={{
                                            textDecoration:
                                                'none'
                                        }}
                                    >
                                        <Button
                                            variant="success"
                                            style={{
                                                textTransform:
                                                    'uppercase',
                                                fontWeight: 550,
                                                cursor: 'help'
                                            }}
                                        >
                                            Protein:{' '}
                                            <span
                                                style={{
                                                    fontWeight: 400,
                                                    color: 'white',
                                                    textTransform:
                                                        'lowercase'
                                                }}
                                            >
                                                {
                                                    proteinFixed
                                                }
                                                g
                                            </span>
                                        </Button>
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavBarInfo;
