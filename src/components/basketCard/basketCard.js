//Страница с товаром внутри корзины
import './basketCard.css';
import { useDispatch } from 'react-redux';
import { removeProductInBasket } from '../../store/reducers/basket';

function BasketCard({ id , idx, img, title, price, currency,handleLink}) {
    const dispatch = useDispatch();

  const handleDelCard = () => {
    dispatch(removeProductInBasket(idx))
  };
  return (
    //не забыть реализовать возврат как ссылку через Link, добавить id

    <div className="basket-card">
      <div className="basket-card-left">
        <img className="basket-card-img" src={img} alt="" />
        <h2 className="basket-card-description">{title}</h2>
      </div>
      <div className="basket-card-right">
        <div className="basket-card-price">
          {price} {currency}
        </div>
        <button onClick={handleDelCard} className="basket-card-btn">
          +
        </button>
      </div>
    </div>
  );
}

export default BasketCard;
