import React from 'react';
import {Container} from "react-bootstrap";

interface Props {
    user: string,
    repo: string,
    ghash: string | undefined
}

const Badge: React.FC<Props> = ({user, repo, ghash}) => (

    ghash !== undefined ?
        <Container>
                    <span className="text-muted">©2019 <a className={'footerLink'}
                                                          href="http://www.appsource.nl">Appsource</a>
                    </span> - <a href={'https://github.com/' + user + '/' + repo + '/commit/' + ghash}>
            <img alt="Latest badge"
                 src={'https://badge.odee.net/github/sha/' + user + '/' + repo + '/master/' + ghash + '/badge.svg'}/>
        </a>
        </Container> : null
);

export default Badge;



