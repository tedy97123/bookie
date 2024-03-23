import axios from "axios";

async function goodReads(Title){ 
    console.log("api",Title)
    const options = {
      method: 'GET',
      url: 'https://books-api7.p.rapidapi.com/books/find/title',
      params: {
        title: await Title
      },
      headers: {
        'X-RapidAPI-Key': '5ce3259baamsh927e932246a4b9bp13b280jsne1e7b7bc0238',
        'X-RapidAPI-Host': 'books-api7.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response
    } catch (error) {
        console.error(error);
    }
}

export {goodReads}; 