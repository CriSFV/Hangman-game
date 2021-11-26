import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/api';
import Header from './Header';
import HangedDoll from './HangedDoll';

function App() {
  const [userLetter, setUserLetter] = useState([]); //donde se almacena las letras de la jugadora (todas)
  const [lastLetter, setLastLetter] = useState(''); //string para almacenar al última letra introducida por la jugadora (si no es permitida no se incluye, por eso no lo pinta aunque marques tecla)
  const [word, setWord] = useState(''); //donde) se va a almacenar la palabra a adivinar

  useEffect(() => {
    callToApi().then((response) => {
      setWord(response);
    });
  }, []);

  const handlerLetter = (ev) => {
    const inputValue = ev.target.value;
    let regex = new RegExp('^[a-zA-Z]$'); // letras permitidas, el resto no lo están
    console.log(inputValue);
    if (inputValue.match(regex)) {
      setUserLetter([...userLetter, inputValue]);
    } else {
      setLastLetter(''); //si es número no pinta nada porque aquí le estamos diciendo que sea string vacío y tampoco se guarda en el estado
    }
  };

  const renderSolutionLetter = () => {
    const wordLetter = word.split(''); //wordLetter es el array donde se guarda la palabra en letras (convertimos la palabra en letras con el metodo split)
    // cogemos el array de la palabra random y la mapeamos. cada una de la sletras la comparamos con las letras del usuario y buscamos la posición
    return wordLetter.map((eachletter, index) => {
      //Buscamos si coincide la letra:
      const letterFound = userLetter.findIndex(
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

  const renderErrorLetters = () => {
    const errorLetter = userLetter.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetter.map((eachletter, index) => {
      return (
        <li className='letter' key={index}>
          {eachletter}
        </li>
      );
    });
  };

  return (
    <div className='page'>
      <Header />

      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>

            <ul className='letters'>{renderSolutionLetter()}</ul>
          </div>

          <div className='feedback'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>{renderErrorLetters()}</ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              value={lastLetter}
              onChange={handlerLetter}
            />
          </form>
        </section>
        <HangedDoll userLetter={userLetter} word={word} />
      </main>
    </div>
  );
}
export default App;
