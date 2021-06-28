// npm i axios

let axios = require("axios")

// console.log(typeof axios) // function

axios.get("https://api.github.com/users/chaitanyatekane").then(
    function(response){
        console.log(response.data)
    }
)

/*
// axios.get("https://api.github.com/users/vaishnavipadale").then(
//     function(response){
//         console.log(response)
//     }
// ).catch(
//     function (error) {
//         console.log(error);
//     }
// )

// Will Produce Below Error Due to Incorrect Username
// Error: Request failed with status code 404 
*/
