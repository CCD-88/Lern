//Подвал корзины
import './basketFooter.css';
import { useSelector } from 'react-redux';


function BasketFooter() {
    const price = useSelector((state) => state.basket.priceBasket);
  return (
    <footer className="basket-footer">
      <div className="basket-wrapper">
        <div className="basket-block">
          <div className="basket-block-left">
            <h2 className="basket-block-desc">Заказ на сумму:</h2>
            <span className='basket-block-price'> {price} ₽</span>
          </div>
          <button className="basket-footer-btn">Оформить Заказ</button>
        </div>
      </div>
    </footer>
  );
}

export default BasketFooter;
