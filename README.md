### ROUTES EXAMPLES

```
.../getClientById/a3b8d425-2b60-4ad7-becc-bedf2ef860bd
.../getClientByName/Britney
.../getNameByPolicy/64cceef9-3a01-49ae-a23b-3761b604800b
.../getPolicyByName/Britney

```

---

## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/) and [MongoDB](https://www.mongodb.com/)

---

### To install dependencies:

```
$ npm install 
```
---

### To run the server:

```
nodemon index.js
```
---

## API

The server part has multiple **API endpoints** using several routes:

- `/api` -> Serves the internal data of the clients and policies.

---

## Built with:

From the JSON I created the database with MongoDB, in this way, together with Node.js I made calls to the database to extract the required data.
The server has created with Express and Node. 
