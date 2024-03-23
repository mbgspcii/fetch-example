
const route = `https://swapi.dev/api/people/`; // mettre httpss pour provoquer une erreur de fetch
const idPeople = 1; // mettre -1 pour provoquer une 404

/**
 * 
 */
const statusConfig = {
  200: () => console.log("Tout est ok"),
  404: (n) => console.log(`404 - Pas de donnée pour l'id ${n}`),
  500: () => console.log("500 - rien ne va plus"),
  default: () => console.log("Default...")
}

const handleResponse = async res => {
  console.log({res});
  const {status} = res;

  // appelle la fonction de gestion du status
  (statusConfig[status] || statusConfig["default"])(idPeople);

  if (res.ok) {
    // si ok alors on va lire le json
    // c'est une méthode asynchrone et on veut attendre le résultat avant de continuer --> d'où le await
    console.log( await res.json() );
  } else {
    console.error( `L'API n'a pas pu répondre. Status= ${ res.status }` );
  }
}

const callV1 = () => {
  fetch( `${ route }${ idPeople }` ).then( async res => {
    handleResponse( res );
  } ).catch( e => console.error( `Une erreur de fetch...`, e));
  console.log(` N'attend pas la réponse `);
}

const callV2 = async () => {
  try{
    const res = await fetch( `${ route }${ idPeople } ` );
    handleResponse( res );
  }
  catch( e ) {
    console.error( `Une erreur de fetch...`, e);
  }
  console.log(`Attend la réponse`);
}

export const setupApiCallV1 = (element) =>{
  element.addEventListener('click', () => callV1(1))
}

export const setupApiCallV2 = (element) =>{
  element.addEventListener('click', () => callV2(1))
}




