import '../styles/Letters.scss';
const SolutionLetters = (props) => {
  const renderSolutionLetter = () => {
    const wordLetter = props.word.split(''); //wordLetter es el array donde se guarda la palabra en letras (convertimos la palabra en letras con el metodo split)
    // cogemos el array de la palabra random y la mapeamos. cada una de la sletras la comparamos con las letras del usuario y buscamos la posición
    return wordLetter.map((eachletter, index) => {
      //Buscamos si coincide la letra:
      const letterFound = props.userLetter.findIndex(
        (eachletterUser) => eachletter === eachletterUser
      );
      // si coincide (porque la posición es diferente a -1, pintas la letra)
      if (letterFound !== -1) {
        return (
          <li className='letter' key={index}>
            {eachletter}
          </li>
        );
      } else {
        return <li className='letter' key={index}></li>;
      }
    });
  };
  return (
    <div className='solution'>
      <h2 className='title'>Solución:</h2>

      <ul className='letters'>{renderSolutionLetter()}</ul>
    </div>
  );
};
export default SolutionLetters;
