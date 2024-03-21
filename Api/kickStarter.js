import axios from "axios";
import { response } from "express";

async function kickstarter(){

const options = {
    method: 'GET',
    url:"https://kickstarter2.p.rapidapi.com/searchByKeyword",
    params:{keyword:'Books'},
    headers: {
        'X-RapidAPI-Key':'5ce3259baamsh927e932246a4b9bp13b280jsne1e7b7bc0238',
        'X-RapidAPI-Host':'kickstarter2.p.rapidapi.com',
    }
};

try {
    const response = await axios.request(options);
    return response.data;

} catch (error) {
    console.log(error);
}



}

export {kickstarter};