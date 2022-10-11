import './basket.css';

import BasketHeader from '../../components/basketHeader/basketHeader';
import BasketCard from '../../components/basketCard/basketCard';
import BasketFooter from '../../components/basketFooter/basketFooter';

function BasketPage() {
  return (
    <div className="basket">
      <div className="basket-wrapper">
        <BasketHeader />
        <div className="basket-cards">
          <BasketCard
            img={'img/1.png'}
            title={'Устрицы по рокфеллеровски'}
            price={2700}
            currency={'₽'}
          />
          <BasketCard
            img={'img/2.png'}
            title={'Устрицы по рокфеллеровски'}
            price={2700}
            currency={'₽'}
          />
          <BasketCard
            img={'img/3.png'}
            title={'Устрицы по рокфеллеровски'}
            price={2700}
            currency={'₽'}
          />
          <BasketCard
            img={'img/3.png'}
            title={'Устрицы по рокфеллеровски'}
            price={2700}
            currency={'₽'}
          />
          <BasketCard
            img={'img/3.png'}
            title={'Устрицы по рокфеллеровски'}
            price={2700}
            currency={'₽'}
          />
          <BasketCard
            img={'img/3.png'}
            title={'Устрицы по рокфеллеровски'}
            price={2700}
            currency={'₽'}
          />
          <BasketCard
            img={'img/3.png'}
            title={'Устрицы по рокфеллеровски'}
            price={2700}
            currency={'₽'}
          />
          <BasketCard
            img={'img/3.png'}
            title={'Устрицы по рокфеллеровски'}
            price={2700}
            currency={'₽'}
          />
          <BasketCard
            img={'img/3.png'}
            title={'Устрицы по рокфеллеровски'}
            price={2700}
            currency={'₽'}
          />
          <BasketCard
            img={'img/3.png'}
            title={'Устрицы по рокфеллеровски'}
            price={2700}
            currency={'₽'}
          />
          <BasketCard
            img={'img/3.png'}
            title={'Устрицы по рокфеллеровски'}
            price={2700}
            currency={'₽'}
          />
        </div>
      </div>
      <BasketFooter />
    </div>
  );
}

export default BasketPage;
