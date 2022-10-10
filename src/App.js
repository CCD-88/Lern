import Header from './components/Header/Header';
import Card from './components/Card/card';

import './App.css';
function App() {
  return (
    <div class="products">
      <div className="container">
        <Header />
        <main className="products-card">
          <Card
            url={'img/1.png'}
            title={`Устрицы по рокфеллеровски`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры`}
            price={2700}
            currency={'₽'}
            weight={500}
            quantity={'гр'}
          />
          <Card
            url={'img/2.png'}
            title={`Свиные ребрышки на гриле с зеленью`}
            description={`Не следует, однако забывать, что реализация намеченных плановых`}
            price={1600}
            currency={'₽'}
            weight={750}
            quantity={'гр'}
          />
          <Card
            url={'img/3.png'}
            title={`Креветки по-королевски в лимонном соке`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу`}
            price={1820}
            currency={'₽'}
            weight={7}
            quantity={'шт'}
          />
          <Card
            url={'img/4.png'}
            title={`Устрицы по рокфеллеровски`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры`}
            price={2700}
            currency={'₽'}
            weight={500}
            quantity={'гр'}
          />
          <Card
            url={'img/5.png'}
            title={`Устрицы по рокфеллеровски`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры`}
            price={2700}
            currency={'₽'}
            weight={500}
            quantity={'гр'}
          />
          <Card
            url={'img/6.png'}
            title={`Свиные ребрышки на гриле с зеленью`}
            description={`Не следует, однако забывать, что реализация намеченных плановых`}
            price={1600}
            currency={'₽'}
            weight={750}
            quantity={'гр'}
          />
          <Card
            url={'img/7.png'}
            title={`Креветки по-королевски в лимонном соке`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу`}
            price={1820}
            currency={'₽'}
            weight={7}
            quantity={'шт'}
          />
          <Card
            url={'img/8.png'}
            title={`Устрицы по рокфеллеровски`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры`}
            price={2700}
            currency={'₽'}
            weight={500}
            quantity={'гр'}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
