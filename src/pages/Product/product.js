//внутренняя страница продукта
import './product.css';
// import CardBtn from '../../ui/Button/button';
import { useNavigate } from 'react-router-dom';


function Product() {
  const navigate = useNavigate();

  return (
    <div className="p">
      <button onClick={() => navigate(-1)}> Вернуться назад</button>
    </div>
  );
}

export default Product;
