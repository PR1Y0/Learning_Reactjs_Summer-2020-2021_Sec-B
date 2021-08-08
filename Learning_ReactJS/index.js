// // console.log('hello to my programming world');

// "use strict"
// // var a=10;
// // var b=2;                                            //scope specific

// let c=10;                                           //block specific        
// const e=50;

// // let student = [1,3,4,'priyojit'];
// // console.log(student[1]);

// // function sum(a, b){
// //     return a+b;
// // }

// // const sum =function(a,b){
// //     return a+b;
// // }

// // const sum =(a,b)=>{
// //         return a+b;
// //     }

// // const sum =(a,b)=>a+b;           //By default return hoi.    //arrow function

// // console.log(sum(3,5));

// // console.log(`this is test value: ${c==='10'? 'true':'false'} `);

// const student = {
//     id: 1,
//     name:'pryam',
//     dept: 'SE',
//     getName: function(){
//         return this.name;
//     },
//     getObj: function (){
//         return {
//             version: '1.0',                                    //function chaining
//             getVersion: function(){ 
//                 return this.version;
//             }
//         }
//     }
// }
// student.name = 'xyz';

// console.log(student.getName());

// console.log(student['getName']());

// console.log(student.getObj().getVersion());
// console.log(student[`getObj`]()[`getVersion`]());     //array syntax

// const student = ()=>{
//     return{
//     id: 1,
//     name:'pryam',
//     dept: 'SE',
//     }
// }

// const s1=student();
// const s2=student();
// const s3=student();


///////////////////////////////////////////////////////////////2nd Class:

// let student = ['Pryam', 'Priyojit', 'Nikita'];
// let numbers = [1,25,50,75,100];

// let newarray = student.filter(function(std){
//     return std[0] == 'P';
// });

// let newarray = student.filter((std)=>std[0] == 'P');   //arrow function
// console.log(newarray);

// let newarray = student.join('-');             //joining function
// console.log(newarray);

// let newarray = student.map((value)=>{                 //map function
//     return value+ "ABC";
// })

// let newarray = numbers.map((value)=>{
//     return value+5;
// })
// console.log(newarray);

// let newarray = numbers.map((value)=>{
//     return value > 5;
// })
// console.log(newarray);

// let newarray = numbers.filter((num)=>num > 20)
// console.log(newarray);


// const student = {id: 1, name: 'PBC', email: 'pbc@gmail.com'}
// let {id, name:newName} = student;                            //object destructuring
// console.log(newName);

// const newarray = [...student, '|', ...numbers];         //spread operator
// console.log(newarray);

// const student = require('./student');
// console.log(student.email);

// const student = require('./student');
// const s1 = student();
// const s2 = student();
// console.log(student());


//callback
//Promise
//async/await

// const f1 = (sum) =>{                             ////////ASYNCHORONOUS:
//     //need 10 sec
//     console.log(`the value is:${sum}`);
// }

// const f2 = (f) =>{
//     console.log('this is f2 function...');
//     //need 10 sec
//     sum =10;
//     f(sum);
// }

// f2(f1);
// console.log('another task');


/////////////////////////////////CALLBACK FUNCTION:

// function setTimeout(f, time){              
//     if(time == 3000){
//         f();
//     }
// }

// console.log('before settimeout function');

// setTimeout( function(){
//     console.log('after 3s');

// },3000);

// console.log('after settimeout function');

///////////////////////////////////////////////PROMISE:
// const p = new Promise((resolve, reject)=>{

//     if(40+10 == 50){
//         resolve('Task done....');
//     }else{
//         reject('Error');
//     }

// });

// p.then(msg=>{
//     console.log(msg);
// }).catch(error=>{
//     console.log(error);
// })

//////////////////////////////////////PROMISE(FUNCTIONALLY):
// function sum(a, b){
//     return new Promise ((resolve, reject)=>{
//         if(a+b == 50){
//             setTimeout(()=>{
//                 resolve('done');
//             },3000)          
//         }else{
//             reject('error');
//         }
//     })
// }

// sum(30, 20).then(msg=>{
//     console.log(msg);
// }).catch(error=>{
//     console.log(error);
// })

// console.log('Another task');


///////////////////////////////////////////ASYNC/AWAIT:
// function sum(a, b){
//     return new Promise ((resolve, reject)=>{
//         if(a+b == 50){
//             setTimeout(()=>{
//                 resolve(a+b);
//             },3000)          
//         }else{
//             reject('error');
//         }
//         })
//     }
// async function processmytask(a,b){

//     console.log('processing started');
    
//     try{
//         const total = await sum(a,b);
//         console.log(`my value is: ${total}`);
//     }catch{
//         console.log('error');
//     }
// }

/////////////////////////////////////////////synchronously process:
//     function sum2(a, b){
//             if(a+b == 50){
//                 setTimeout(()=>{
//                     return a+b;
//                 },3000)          
//             }else{
//                 return 'error';
//             }
//     }
//     async function processmytask2(a,b){
//         const total = sum2(a,b);
//         console.log(`my value is: ${total}`);        
//     } 
    
// processmytask2(30,20);
// console.log('test this process');

// processmytask(30,20);
// console.log('this is test');


// import {User} from './User';

// const u1 = new User(1, 'pryam', 'pb@gmai.com');
// console.log(u1.name);
// console.log(u1.getName());