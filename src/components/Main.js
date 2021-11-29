import Dummy from './Dummy';
import SolutionLetters from './SoluctionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';

const Main = (props) => {
  return (
    <main className='main'>
      <section>
        <SolutionLetters word={props.word} userLetter={props.userLetter} />
        <ErrorLetters word={props.word} userLetter={props.userLetter} />
        <Form
          handlerLetter={props.handlerLetter}
          lastLetter={props.lastLetter}
        />
      </section>
      <Dummy numberError={props.numberError()} />
    </main>
  );
};
export default Main;
