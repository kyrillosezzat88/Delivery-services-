# Delivery Services MERN Stack

##### Delivery Services is a App to connects shippers and carriers on a digital freight platform it`s built in React and Node (MERN Stack)

[![React](https://cdn.iconscout.com/icon/free/png-256/react-2752089-2284906.png)](https://ibb.co/3fW2RyQ)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Screenshots

![Home Page](https://i.ibb.co/wKvW0cT/2023-03-16-16-54.png "Home Page")
![Login Page](https://i.ibb.co/XD8G2rW/2023-03-16-16-34-1.png "Login Page")
![Register Page](https://i.ibb.co/2MPH5MQ/2023-03-16-16-32.png "Register Page")
![Shipper Dashbaord](https://i.ibb.co/Z1Fz4xv/2023-03-16-16-42.png "Shipper Dashbaord")
![Carrier Dashbaord](https://i.ibb.co/nzkrvQH/2023-03-16-16-43.png "Carrier Dashbaord")

## Features

- Authantication login and Register as Shipper or Carrier
- as a shipper you can create a new shipment and trace the status and who picked up
- grap all shippemnts of loged in shipper
- as a Carrier you can pick up an available shipments and update status of it to prevent any carrier to pick it up again
- grap all picked up shipments for logedin carrier
- and more.....

## Apis

- Authantication login and sign up (shipper and carrier)
- Create/Update/read/Filter (Parcels Apis)

## Middlewares

- carrier and shipper Rules

## Frontend Tech

- [ReactJS and React Hooks](https://reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Sass](https://sass-lang.com/)
- [universal Cookie](https://www.npmjs.com/package/universal-cookie)

## Backend Teck

- [Nodejs](https://nodejs.org/en/)
- [Express-js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://jwt.io/)
- [DotEnv](https://www.npmjs.com/package/dotenv)

## Folder Structure Frontend

```bash
└── Client/
    ├── build/
    ├── node_modules/
    ├── public/
    └── src/
        ├── Apis/
        │   └── auth.js
        │   └── axiosConfig.js
        │   └── percel.js
        ├── assets/
        │   ├── images/
        │   └── styles/
        ├── Components/
        │   ├── Featured/
        │   ├── Hero/
        │   ├── Modals/
        │   ├── Navbar/
        │   └── index.js
        ├── contextApi/
        │   ├── AppContext.js
        │   ├── AppReducers.js
        │   └── InitState.js
        ├── pages/
        │   ├── dashbaord/
        │   ├── home/
        │   ├── login/
        │   ├── myshipments/
        │   ├── register/
        │   └── index.js
        └── routes/
            ├── PrivateRoute.js
            └── PublicRoute.js
        └── App.js/
```

## Folder Structure Backend

```bash
└── server/
    ├── controllers/
    │    ├── auth.js
    │    └── parcel.js
    ├── middlewares/
    │    ├── auth.js
    │    ├── errorHandler.js
    │    └── shipperJWT.js
    ├── models/
    │    ├── parcel.js
    │    └── user.js
    ├── routes/
    │    ├── auth.js
    │    └── percel.js
    └── index.js
```

## Installation-Frontend

Delivery Services requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
cd app-folder
npm install
npm start
```

For Generate Build folder:

```sh
npm run build
```

## Installation-Backend

1-requires [Node.js](https://nodejs.org/) to run.
2-Create .env file in route dir and add

```bash
PORT= yout Port
SECRET_KEY= your secret key
MONGODB_URI= your Mongodb url
```

3-Install the dependencies and devDependencies and start the server.

```sh
cd server-app-folder
npm install
npm start
```

## License

MIT
