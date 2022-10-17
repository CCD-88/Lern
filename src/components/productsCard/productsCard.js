import './productsCard.css';
import CardBtn from '../../ui/Button/button';
import { useDispatch } from 'react-redux';
import { addProductInBasket } from '../../store/reducers/basket';
import { v4 as uuidv4 } from 'uuid'; //подключение бб для получения рандомного idx
import { useNavigate } from 'react-router-dom';

//Создание Карточек с продуктами
function ProductsCard({ id, img, title, description, price, currency, weight, quantity })

{
    const navigate = useNavigate();

    const handleLink = () => {
        navigate  (`/product/${id}`)
        const newPage = () => {
     
            const item = {
              id: id,
              idx: uuidv4(),
              img: img,
              title: title,
              price: price,
              currency: currency,
              handleLink: id,
            };
        
        
        
            dispatch(newPage(item));
          };
        
          // onClick={handleLink} вставить в card
          return (
            <div className="card" onClick={handleLink}>
              <img className="card__img" src={img} alt="product" />
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
                <CardBtn handleClick={newPage} />
              </div>
            </div>
          );
           
          
    };
      
      

       
        
  const dispatch = useDispatch();
  
  const addProduct = (e) => {
    e.stopPropagation(); //  предотвращение всплытия
    console.log('Click po knopke dobavleni9 tovara');
    const item = {
      id: id,
      idx: uuidv4(),
      img: img,
      title: title,
      price: price,
      currency: currency,
      handleLink: id,
    };



    dispatch(addProductInBasket(item));
  };

  // onClick={handleLink} вставить в card
  return (
    <div className="card" onClick={handleLink}>
      <img className="card__img" src={img} alt="product" />
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
        <CardBtn handleClick={addProduct} />
      </div>
    </div>
  );
}

export default ProductsCard;
