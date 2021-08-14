import User from './User.js';
export default function UserList(users){

    // const user ={
    //     id: 1,
    //     name: 'pryam',
    //     dept: 'CSE',
    // };

    return(
        `<table border=1>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DEPT</th>
                <th>ACTION</th>
            </tr>
            ${
                users.map((user)=>{
                    return User(user);
                }).join("")
            }
        </table>`
    );
}