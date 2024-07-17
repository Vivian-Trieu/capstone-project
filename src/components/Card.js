import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, price, description, imageSrc }) => {
    return (
        <article>
            <img src={imageSrc} alt={title}/>
            <div className='card-content'>
                <div className='card-heading'>
                    <h3>{title}</h3>
                    <h5>{price}</h5>
                </div>
                <p className='card-description'>{description}</p>
                <div className='card-button'>
                    <h5>Order a delivery</h5>
                    <FontAwesomeIcon icon={faPersonBiking} />
                </div>
            </div>
        </article>
    )
}

export default Card;