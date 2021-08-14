// const id = require('./User');                      //user defined module.....
// const path = require('path');                      //core module.....
// const fs = require('fs');
// const http = require('http');

import path from 'path';                      //ES6 format
import fs from 'fs'; 
import http from 'http';
// import {User, id} from './User.js';
import User from './User.js';
import Button from './Button.js';
import index from './index.js';
import UserList from './UserList.js';

// const add = "c://windows/sdsdf\\asdasd\\\asd/asd/asd///asd/asd.js";
// console.log(path.dirname(add));
// console.log(path.extname(add));
// console.log(path.normalize(add));

// const user1 = new User('pryam', 12345);     //////////////////////Object Creation

const server = http.createServer(function(req, res){
                    // console.log(req.url);
                    // console.log(req.method);          //request from server

                    const updateclick = ()=>{return `alert('this is update button')`};
                    const createclick = ()=>{return `alert('this is create button')`};

                    const users =[
                        {id: 1, name: 'pryam', dept: 'CSE'},
                        {id: 2, name: 'xyz', dept: 'EEE'},
                        {id: 3, name: 'abx', dept: 'CS'},
                        {id: 4, name: 'pqr', dept: 'SE'}
                    ];

                    //response to server
                    // if(req.url == '/home'){
                    //     // res.write('Welcome Home');                   /////////////////3rd class
                    //     res.write(`<h1>Welcome                   
                    //     ${Button('create', createclick)} || 
                    //     ${Button('update', updateclick)}</h1>`);
                    //     res.end();
                    // }  
                    
                    if(req.url == '/home'){
                        // res.write('Welcome Home');
                        res.write(index('home', UserList(users)));


                        res.end();
                    } 
                    if(req.url == '/style.css'){
                        fs.createReadStream('style.css').pipe(res);              //fs uses to serve the content of a file
                    }


                    if(req.url == '/login'){
                        // res.writeHead(200, {'content-type': 'text/html'});    //responsing with html content
                        // res.write('<h5>Welcome to Login Page</h5>');
                        // // res.write('Welcome to Login Page');
                        // res.end();
                        fs.createReadStream('login.html').pipe(res);
                    }

                });

server.listen(8000);
console.log('node server started at 8000');
