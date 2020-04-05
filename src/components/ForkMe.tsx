import React from 'react';
import './ForkMe.css'

interface Props {
    user: string,
    repo: string
}

const ForkMe: React.FC<Props> = ({user, repo}) => (
    <a className="github-fork-ribbon" href={'https://github.com/' + user + '/' + repo} data-ribbon="Fork me on GitHub"
       title="Fork me on GitHub">Fork me on GitHub</a>
);

export default ForkMe;



