import {getUsers} from './services/api.js';

getUsers().then(users => {
    console.log(users);
    }).catch(err => {
    console.error(err);
});
