import '../styles/App.scss';
import '../styles/Form.scss';
import { useState, useEffect } from 'react';

import callToApi from '../services/api';
import Header from './Header';

import Footer from './Footer';

import Main from './Main';
import { Outlet } from 'react-router';

function App() {
  const [userLetter, setUserLetter] = useState([]); //donde se almacena las letras de la jugadora (todas)
  const [lastLetter, setLastLetter] = useState(''); //string para almacenar al última letra introducida por la jugadora (si no es permitida no se incluye, por eso no lo pinta aunque marques tecla)
  const [word, setWord] = useState(''); //donde) se va a almacenar la palabra a adivinar

  //petición random word:
  useEffect(() => {
    callToApi().then((response) => {
      setWord(response);
    });
  }, []);

  const handlerLetter = (ev) => {
    let regex = new RegExp('^[a-zA-Z]$'); // letras permitidas, el resto no lo están
    // si la letra esta permitida:
    if (ev.match(regex)) {
      setUserLetter([...userLetter, ev]);
    } else {
      setLastLetter(''); //si es número no pinta nada porque aquí le estamos diciendo que sea string vacío y tampoco se guarda en el estado
    }
  };

  const numberError = () => {
    const errorLetter = userLetter.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetter.length;
  };

  return (
    <div className='page'>
      <Header />
      <Main
        word={word}
        userLetter={userLetter}
        handlerLetter={handlerLetter}
        lastLetter={lastLetter}
        numberError={numberError}
      />{' '}
      {/* Con Outlet añadimos las rutas que están en index.js */}
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
