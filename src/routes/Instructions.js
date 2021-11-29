import '../styles/Instructions.scss';
const Instructions = () => {
  return (
    <section className='instructions'>
      <p>
        Haz click donde indica "Escribe una letra" y escribe tu letra para
        adivinar la palabra secreta. Si fallas la letra te indicará si has
        acertado, ya que se escribirá en su posición correspondiente de la
        solución y si no, se añadirá a las letras falladas.
      </p>
      <p>¡A jugar!</p>
    </section>
  );
};
export default Instructions;
