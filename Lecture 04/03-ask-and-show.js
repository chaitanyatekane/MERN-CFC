// npm i axios
// npm i readline-sync

var readlineSync = require('readline-sync');
let axios = require("axios")

var username = readlineSync.question('What is your github username? ');

let url = "https://api.github.com/users/" + username

axios.get(url).then(
    function(response){
        console.log(response.data.name)
    }
).catch(
    function(error){
        console.log(error);
    }
)

/*
Sample Output :-
What is your github username? chaitanyatekane
Tekane Chaitanya 
*/