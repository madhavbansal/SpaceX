import React from 'react';
import { Switch, Route } from 'react-router';
import { Home } from './pages';
import { Helmet } from 'react-helmet';
import * as styles from './app.style';

const App = () => {
    return (
        <div style={styles.style.container}>
            <Helmet>
                <title>SpaceX</title>
            </Helmet>
            <Switch >
                <Route path="/" exact render={props => <Home {...props} />} />
            </Switch>
        </div>

    )


}

export default App;