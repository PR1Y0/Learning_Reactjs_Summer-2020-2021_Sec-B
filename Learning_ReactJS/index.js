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

// // const sum =(a,b)=>a+b;           //By default return hoi.

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

const student = ()=>{
    return{
    id: 1,
    name:'pryam',
    dept: 'SE',
    }
}

const s1=student();
const s2=student();
const s3=student();
