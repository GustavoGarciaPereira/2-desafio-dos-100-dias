import React from 'react';
import Link from 'next/link';
import 'isomorphic-fetch';

const Home = ({repositories}) => (
    <div>
        <Link href="/blog">
            <a>Blo-gustavo</a>
        </Link>
        <ul>
            {repositories.map(repo => <li key={repo.id}>{ repo.name }</li>)}
        </ul>
    </div>
);

Home.getInitialProps = async () => {


    //const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
    const response = await fetch('https://api.github.com/users/gustavogarciapereira/repos');
    const repositories = await response.json();

    return {repositories};
};


export default Home;