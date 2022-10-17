import './basketHeader.css';
import { Link } from 'react-router-dom';

function BasketHeader() {
  return (
    <div className="basket-header">
      <Link to="/">
        <svg
          className="basket-header-button"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="15.5" transform="rotate(180 16 16)" stroke="#D58C51" />
          <g  clipPath="url(#clip0_7057_2)">
            <path
              d="M14.6517 13.0468C14.787 12.9115 15.0001 12.9115 15.1354 13.0468C15.2662 13.1776 15.2662 13.3952 15.1354 13.5257L12.6825 15.9786H20.7767C20.9654 15.9786 21.1202 16.1286 21.1202 16.3172C21.1202 16.5059 20.9654 16.6608 20.7767 16.6608H12.6825L15.1354 19.1091C15.2662 19.2444 15.2662 19.4624 15.1354 19.5928C15.0001 19.7282 14.787 19.7282 14.6517 19.5928L11.6181 16.5593C11.4873 16.4285 11.4873 16.2109 11.6181 16.0804L14.6517 13.0468Z"
              fill="#D58C51"
            />
          </g>
          <defs>
            <clipPath className="one" id="clip0_7057_2">
              <rect width="9.6" height="9.6" fill="white" transform="translate(11.52 11.52)" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <h1 className="basket-tilte">Корзина с выбранными товарами</h1>
    </div>
  );
}

export default BasketHeader;
