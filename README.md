
# todos-API

  
  

## Introduction

  

This is a Node.js based API which fetch todos data from a third party API.

  

### Author Information :

Tushar Monga

e-mail : tusharmongatt@gmail.com

github : www.github.com/tusharmonga014

linkedin : www.linkedin.com/in/tusharmonga014

  
  

## Starting server

  

Use any of the following commands :

$ nodemon index.js

$ node index.js

to run the server, and make it listen to at port 3000.

The port can be changed by editing in the .env file.

  
  

## Routes

  

'/todos' - sends in response all the todos objects fetch from third party API, without 'userId' field in any object.

'/user/:userId' - sends in response the user information as well as all the todos of that specific user.

  
  

## Project Working Flow

  

-> Whenever a request comes to the API, it goes its specific route in 'routes' folder.

-> There the required controller is called to perform required action of fetching data.

-> Utlilty ('utils') contains a sepearte folder in which all the functions are kept which make API calls to fetch data from third party API.

-> Controllers call the necessary thirdPartyAPI utility functions, recieve the data and send them back as response.

-> If at any stage some error occurs, a response is sent back with status 500 and error message as 'Internal Server Error'.

  

## Postman API testing collection link

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b9a6b32bdc733704307e?action=collection%2Fimport)