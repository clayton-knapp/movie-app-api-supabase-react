import { client } from './client';

export async function addToWatchList(movie) {
  const response = await client
    .from('watchlist')
    .insert(movie);

  return checkError(response);
}

export async function fetchWatchList() {
  const response = await client
    .from('watchlist')
    .select();

  return checkError(response);
}





//AUTH STUFF

export async function getUser() {
  return client.auth.session() && client.auth.session().user;
}

// export async function checkAuth() {
//   const user = await getUser();

//   if (!user) location.replace('../'); 
// }

// export async function redirectIfLoggedIn() {
//   if (await getUser()) {
//     location.replace('./other-page');
//   }
// }

export async function signUpUser(email, password){
  const response = await client.auth.signUp({ email, password });
  
  return response.user;
}

export async function signInUser(email, password){
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  // return window.location.href = '../';
}

function checkError({ data, error }) {
  return error ? alert(error) : data;
}