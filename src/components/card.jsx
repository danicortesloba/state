import { useState } from 'react';
import PropTypes from 'prop-types';
import "./card.css"
   
const Card = ({name, price, description, inStock}) => {

  const [currentStock, setCurrentStock] = useState(inStock);

  const buy = () => {
    currentStock <= 0 ? setCurrentStock(0) : setCurrentStock(currentStock - 1)
  }
 

    return (
      <div className='card'>
        <h1>{name}</h1>
        <h4>{price}</h4>
        <p>{description}</p>
        <p className={currentStock > 0 ? "stock" : "noStock"}>{currentStock > 0 ? `En Stock: ${currentStock}` : `¡Agotado!`}</p>
        <button className="button" onClick={buy}>Comprar</button>
      </div>
    )
  }
  
  export default Card

 Card.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    description: PropTypes.string,
    inStock: PropTypes.number
  };