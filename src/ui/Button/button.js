import './button.css';

function CardBtn({ handleClick }) {
  return (
    <button onClick={handleClick} className="btn">
      +
    </button>
  );
}

export default CardBtn;
