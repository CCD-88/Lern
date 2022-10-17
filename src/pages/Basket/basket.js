import './basket.css';

import BasketHeader from '../../components/basketHeader/basketHeader';
import BasketCard from '../../components/basketCard/basketCard';
import BasketFooter from '../../components/basketFooter/basketFooter';

import { useSelector } from 'react-redux';


function BasketPage() {

  const basket = useSelector((state) => state.basket.basket);
  
  return (
    <div className="basket">
      <div className="basket-wrapper">
        <BasketHeader />
        <div className="basket-cards">
          {basket.map((item) => {
            return (
              <BasketCard
                id={item.id}
                idx={item.idx}
                img={item.img}
                title={item.title}
                price={item.price}
                currency={item.currency}
                key={item.idx}
               
              />
            );
          })}
        </div>
      </div>
      <BasketFooter />
    </div>
  );
}

export default BasketPage;
