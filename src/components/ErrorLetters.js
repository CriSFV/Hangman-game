import '../styles/Letters.scss';
const ErrorLetters = (props) => {
  const renderErrorLetters = () => {
    const errorLetter = props.userLetter.filter(
      (letter) => props.word.includes(letter) === false
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
    <div className='feedback'>
      <h2 className='title'>Letras falladas:</h2>
      <ul className='letters'>{renderErrorLetters()}</ul>
    </div>
  );
};
export default ErrorLetters;
