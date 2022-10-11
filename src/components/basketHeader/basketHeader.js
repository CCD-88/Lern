import './basketHeader.css';

function BasketHeader () {
    return (
        <div className="basket-header">
            <button className='basket-header-button'>Кнопка назад</button>
         <h1 className="basket-tilte">Корзина с выбранными товарами</h1>
        </div>
    )
}

export default BasketHeader;