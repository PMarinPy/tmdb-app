import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWI5MWMyODY2YjU0YWNjNmUyZTlhNDdjN2U2ZWVhNyIsIm5iZiI6MTcxOTQ1MjEzMi40NDM0MDksInN1YiI6IjY2N2NiZjM4YTc5MjI5YWY3YjU5MTFjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.73Iocqy7LP64hD9Cz7iyS9tWGSye8Tj8Ftg-7cPTkZo'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });