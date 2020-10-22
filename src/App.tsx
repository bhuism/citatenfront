import React from 'react';
import {Button, ButtonGroup, ButtonToolbar, Col, Container, Jumbotron, Row} from "react-bootstrap";
import ForkMe from "./components/ForkMe";
import Badge from "./components/Badge";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "swagger-ui-react/swagger-ui.css";
import SwaggerUI from "swagger-ui-react";

function App() {
    return (

        <>
            <ForkMe user={'bhuism'} repo={'citaten'}/>

            <header>
                <Jumbotron>
                    <Container>
                        <Row>
                            <h1 className={'display-3'}>Citaten!</h1>
                        </Row>
                    </Container>
                </Jumbotron>
            </header>

            <main>
                <Container>
                    <Row>
                        <Col>
                            <ButtonToolbar>
                                <ButtonGroup className="mr-2">
                                    <Button variant={"primary"} size={"lg"}
                                            href={'https://api.citaten.odee.net/citaten'}>Citaten
                                        »</Button>
                                </ButtonGroup>
                                <ButtonGroup className="mr-2">
                                    <Button variant={"primary"} size={"lg"}
                                            href={'https://api.citaten.odee.net/sprekers'}>Sprekers
                                        »</Button>
                                </ButtonGroup>
                                <ButtonGroup className="mr-2">
                                    <Button variant={"primary"} size={"lg"}
                                            href={'https://api.citaten.odee.net/categorien'}>Categories »</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <SwaggerUI url="https://api.citaten.odee.net/openapi.yml"/>
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer>
                <Badge user={'bhuism'} repo={'citatenfront'} ghash={process.env.REACT_APP_COMMIT_SHA}/>
            </footer>

        </>
    );
}

export default App;
