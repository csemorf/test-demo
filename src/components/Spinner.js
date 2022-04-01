// import spinner from './assets/spinner.gif';
import spinner from './assets/spinner-200px.svg';

const Spinner = () => {
  return (
    <div className="opacity-40 rounded">
      <img
        className="rounded text-center mx-auto"
        width={100}
        src={spinner}
        alt="spinner"
      />
    </div>
  );
};

export default Spinner;
