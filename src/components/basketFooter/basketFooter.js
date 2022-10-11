import './basketFooter.css';

function BasketFooter() {
  return (
    <footer className="basket-footer">
      <div className="basket-wrapper">
        <div className="basket-block">
          <div className="basket-block-left">
            <h2 className="basket-block-desc">Заказ на сумму:</h2>
            <span className='basket-block-price'>6 220 ₽</span>
          </div>
          <button className="basket-footer-btn">Оформить Заказ</button>
        </div>
      </div>
    </footer>
  );
}

export default BasketFooter;
