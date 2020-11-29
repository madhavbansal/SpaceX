import React from 'react';
import { Switch, Route } from 'react-router';
import { Home } from './pages';
import { Helmet } from 'react-helmet';

const App = () => {
    return (
        <>
            <Helmet>
                <title>SpaceX</title>
            </Helmet>
            <Switch >
                <Route path="/" exact render={props => <Home {...props} />} />
            </Switch>
        </>

    )


}

export default App;