import React from 'react';
import {Button, ButtonGroup, ButtonToolbar, Container, Jumbotron, Row} from "react-bootstrap";
import ForkMe from "./components/ForkMe";
import Badge from "./components/Badge";
import './App.css'

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
                        <ButtonToolbar>
                            <ButtonGroup className="mr-2">
                                <Button variant={"primary"} size={"lg"} href={'#'}>Citaten »</Button>
                            </ButtonGroup>
                            <ButtonGroup className="mr-2">
                                <Button variant={"primary"} size={"lg"} href={'#'}>Sprekers »</Button>
                            </ButtonGroup>
                            <ButtonGroup className="mr-2">
                                <Button variant={"primary"} size={"lg"} href={'#'}>Categories »</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Row>
                </Container>
            </main>

            <footer className="footer">
                <Badge user={'bhuism'} repo={'citatenfront'} ghash={process.env.REACT_APP_GIT_SHA}/>
            </footer>

        </>
    );
}

export default App;
