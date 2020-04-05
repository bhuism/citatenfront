import React from 'react';
import {Button, ButtonGroup, ButtonToolbar, Container, Jumbotron, Row} from "react-bootstrap";
import ForkMe from "./components/ForkMe";
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
                    <Row >
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
                <div className="container">
                    <span className="text-muted">©2019 <a className={'footerLink'}
                                                          href="http://www.appsource.nl">Appsource</a>
                    </span> - <a
                    href="https://github.com/bhuism/citaten/commit/71a29129d2b43426344fba3398b824bbc7971a9a">
                    <img alt="Latest badge"
                         src="https://badge.odee.net/github/sha/bhuism/citaten/master/71a29129d2b43426344fba3398b824bbc7971a9a/badge.svg"/>
                </a>
                </div>
            </footer>

        </>
    );
}

export default App;
