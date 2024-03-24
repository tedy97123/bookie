import axios from "axios";

async function goodReads(Title){ 
    const url= `https://www.googleapis.com/books/v1/volumes?q=${Title}`
    try {
      const response = await axios.get(url);
      return response.data
    } catch (error) {
        console.error(error);
    }
}

export {goodReads}; 