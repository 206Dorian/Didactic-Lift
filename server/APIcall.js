// require('dotenv').config();
const axios = require('axios');

const APIKey = process.env.APIKEY

export async function APICall(){
//the variable muscleGroup needs to return the string of the users selection. 
let muscleGroup =  ''

    try{
        const response = await axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`,
      {
        headers: {
            'X-Api-Key': APIKey
      }  
    });
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return []; 
    }

}

//THIS IS WHAT THE API RECOMMENDS FOR NODEjs
// const request = require('request');
// var muscle = 'biceps';
// request.get({
//   url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
//   headers: {
//     'X-Api-Key': 'YOUR_API_KEY'
//   },
// }, function(error, response, body) {
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// });
//THIS IS WHAT THE API RECOMMENDS FOR JAVASCRIPT
// var muscle = 'biceps'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });