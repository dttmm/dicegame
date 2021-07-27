import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const product = "가위q"
const imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzyhzO0Lo4y1lReI2tBay0yAfCAEAmnxe0g&usqp=CAU"

function handleClick() {
  alert('안녕')
}

ReactDOM.render(
  <>
    <h1 id="title">{product}바위rrrr보</h1>
    <button className="hand">가위</button>
    <button className="hand">바위</button>
    <button className="hand">보</button>
    <img onClick={handleClick} src={imgUrl}></img>
    <App />
  </>,
  document.getElementById('root')
);