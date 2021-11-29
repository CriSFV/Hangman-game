import '../styles/App.scss';
import '../styles/Form.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/api';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SoluctionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';

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

      <main className='main'>
        <section>
          <SolutionLetters word={word} userLetter={userLetter} />
          <ErrorLetters word={word} userLetter={userLetter} />
          <Form handlerLetter={handlerLetter} lastLetter={lastLetter} />
        </section>
        <Dummy numberError={numberError()} />
      </main>
      <Footer />
    </div>
  );
}
export default App;
