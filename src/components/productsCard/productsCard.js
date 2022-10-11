import './productsCard.css';
import CardBtn from '../../ui/Button/button';

function ProductsCard({ url, title, description, price, currency, weight, quantity }) {
  return (
    <div className="card">
      <img className="card__img" src={url} alt="product" />
      <div className="card__title">
        <h1>{title}</h1>
      </div>
      <div className="card__description">
        <p>{description}</p>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__price">
          <span>
            {price} {currency} /{' '}
          </span>
          <span className="card-bottom__weight">
            {weight} {quantity}.
          </span>
        </div>
        <CardBtn />
      </div>
    </div>
  );
}

export default ProductsCard;
