import ProductsHeader from '../../components/productsHeader/ProductsHeader';
import ProductsCard from '../../components/productsCard/productsCard';
import './products.css';

function ProductsPage() {
  return (
    <div class="products">
      <div className="container">
        <ProductsHeader />
        <main className="products-card">
          <ProductsCard
            url={'img/1.png'}
            title={`Устрицы по рокфеллеровски`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры`}
            price={2700}
            currency={'₽'}
            weight={500}
            quantity={'гр'}
          />
          <ProductsCard
            url={'img/2.png'}
            title={`Свиные ребрышки на гриле с зеленью`}
            description={`Не следует, однако забывать, что реализация намеченных плановых`}
            price={1600}
            currency={'₽'}
            weight={750}
            quantity={'гр'}
          />
          <ProductsCard
            url={'img/3.png'}
            title={`Креветки по-королевски в лимонном соке`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу`}
            price={1820}
            currency={'₽'}
            weight={7}
            quantity={'шт'}
          />
          <ProductsCard
            url={'img/4.png'}
            title={`Устрицы по рокфеллеровски`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры`}
            price={2700}
            currency={'₽'}
            weight={500}
            quantity={'гр'}
          />
          <ProductsCard
            url={'img/5.png'}
            title={`Устрицы по рокфеллеровски`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры`}
            price={2700}
            currency={'₽'}
            weight={500}
            quantity={'гр'}
          />
          <ProductsCard
            url={'img/6.png'}
            title={`Свиные ребрышки на гриле с зеленью`}
            description={`Не следует, однако забывать, что реализация намеченных плановых`}
            price={1600}
            currency={'₽'}
            weight={750}
            quantity={'гр'}
          />
          <ProductsCard
            url={'img/7.png'}
            title={`Креветки по-королевски в лимонном соке`}
            description={`Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу`}
            price={1820}
            currency={'₽'}
            weight={7}
            quantity={'шт'}
          />
          <ProductsCard
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

export default ProductsPage;
