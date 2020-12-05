import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import App from './src/app';
const app = express();
const port = process.env.PORT || 3000;

console.log(process && process.env,"<---->",process && process.env && process.env.port)

app.use(bodyParser.json());
app.use(express.static('build/public'));

//demo route

app.get('*', (req, res, next) => {
    const context = {}
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />

        </StaticRouter>


    );
    const helmet = Helmet.renderStatic();
    const html = `
    <html>
    <head>
    ${helmet.meta.toString()}
    ${helmet.title.toString()}
    </head>
    <body>
    <div id="root">
    ${content}
    </div>
    <script src="client_bundle.js"></script>
    </body>
    </html>
    `


    res.send(html)
});



app.listen(port, () => {

    console.log(`Server running on PORT:${port}`)

});