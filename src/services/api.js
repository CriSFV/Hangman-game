const callToApi = () => {
  // Llamamos al API
  return fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
    .then((response) => response.json())
    .then((response) => {
      // Cuando responde el API podemos limpiar los datos aquí
      const result = response.body.Word;
      console.log(result);
      return result;
    });
};

export default callToApi;
