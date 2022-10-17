//Главная страница с продуктами
import ProductsHeader from '../../components/productsHeader/productsHeader';
import ProductsCard from '../../components/productsCard/productsCard';
import './products.css';

function ProductsPage() {
  return (
    <div className="products">
      <div className="container">
        <ProductsHeader />

        <main className="products-card" >
          <ProductsCard
            id={1}
            img={'img/1.png'}
            title={`Устрицы по рокфеллеровски`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры`}
            price={2700}
            currency={'₽'}
            weight={500}
            quantity={'гр'}
          />
          <ProductsCard
            id={2}
            img={'img/2.png'}
            title={`Свиные ребрышки на гриле с зеленью`}
            description={`Не следует, однако забывать, что реализация намеченных плановых`}
            price={1600}
            currency={'₽'}
            weight={750}
            quantity={'гр'}
          />
          <ProductsCard
            id={3}
            img={'img/3.png'}
            title={`Креветки по-королевски в лимонном соке`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу`}
            price={1820}
            currency={'₽'}
            weight={7}
            quantity={'шт'}
          />
          <ProductsCard
            id={4}
            img={'img/4.png'}
            title={`Устрицы по рокфеллеровски`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры`}
            price={2700}
            currency={'₽'}
            weight={500}
            quantity={'гр'}
          />
          <ProductsCard
            id={5}
            img={'img/5.png'}
            title={`Устрицы по рокфеллеровски`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры`}
            price={2700}
            currency={'₽'}
            weight={500}
            quantity={'гр'}
          />
          <ProductsCard
            id={6}
            img={'img/6.png'}
            title={`Свиные ребрышки на гриле с зеленью`}
            description={`Не следует, однако забывать, что реализация намеченных плановых`}
            price={1600}
            currency={'₽'}
            weight={750}
            quantity={'гр'}
          />
          <ProductsCard
            id={7}
            img={'img/7.png'}
            title={`Креветки по-королевски в лимонном соке`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу`}
            price={1820}
            currency={'₽'}
            weight={7}
            quantity={'шт'}
          />
          <ProductsCard
            id={8}
            img={'img/8.png'}
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

export default ProductsPage;
