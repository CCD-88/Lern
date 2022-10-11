import './basketCard.css';

function BasketCard({ img, title, price, currency }) {
  return (
    <div className="basket-card">
      <div className="basket-card-left">
        <img className="basket-card-img" src={img} alt="" />
        <h2 className="basket-card-description">{title}</h2>
      </div>
      <span className="basket-card-price">
        {price} {currency}
      </span>
      <button className="basket-card-btn">+</button>
    </div>
  );
}

export default BasketCard;
