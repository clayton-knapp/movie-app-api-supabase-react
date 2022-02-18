const fetch = require('node-fetch');
require('dotenv').config();


exports.handler = async (e, context) => {
  try {
    const search = e.queryStringParameters.search;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`);

    const json = await response.json();

    const data = JSON.stringify(json);
    
    return { 
      statusCode: 200, 
      body: data
    };

  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
