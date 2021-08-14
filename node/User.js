// export default class User{
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//     }

//     getName(){
//         return this.name;
//     }
// }
// // export const id = 10;

////4th class

import Button from './Button.js';

export default function User({id, name, dept}){

    const editClick = (id)=>{
        console.log(`Edit button in action: ${id}`);
        return `alert('edit id:${id}')`;
    }

    const deleteClick = (id)=>{
        console.log(`Delete button in action:`+id);
        return `alert('delete id:${id}')`;
    }

    return(
        `<tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${dept}</td>
            <td>
                ${Button('Edit', editClick, id)} | ${Button('Delete', deleteClick, id)}
            </td>
        </tr>`
    );
}