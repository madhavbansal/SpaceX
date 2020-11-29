This project provides you filtered data of launches done by SpaceX on the basis of different filters.

## Available Script





In this project directory, you can run:

### Installation process

Clone the repo

run npm i command on terminal

run npm start command

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browsers

The page will reload if you make edits.<br />



### `npm run build:prod`

Builds the app for production<br />



## Description

This app is build using webpack for client as well as for server.

Server side rendering has been implemented on the home page of the application.

Webpack configurations are placed in webpack.client.js for client side and webpack.server.js for server side.

In components folder all the resuable components are placed

Custom Hooks are used to fetch data

Loader is used in case there is any delay in data fetching

index.js files are used to minimise the file path while importing.

A single route is present in App.js which renders Home component

Home component renders two different components i.e Filters and LaunchPrograms

Filter component renders three children for three different sections of Filter.

Launch Program component is responsible for showing different launches on the basis of filters.

Whenever a filter is clicked a key value pair is appended in query params of the route.

Fallback is used if there is an error in fetching the data.

Only client side bundle is exposed.User won't be able to see server side bundle because of security reasons.

All the constant data is coming from a constant file which is present in utils

All the helper functions are placed in helper file which is present in utils

Material UI is used throughout the project



## Functionalities Covered

Server side rendering of the frst page

No use of Bootstrap

Adding different filters

Filter options are hardcoded

Changing of filter will change the URL and will update the page with latest code without refreshing the page


## Stack Used

React

Node

Express







