import Nav from './Nav';
import Footer from './Footer';
import '../styles/confirmedbooking.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const ConfirmedBooking = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    }


    return (
        <>
            <Nav />
            <div className="confirmation-container">
                <FontAwesomeIcon className="icon" icon={faCheck} size="5x"/>
                <h1>Booking Confirmed!</h1>
                <h6>Your booking has been successfully confirmed.</h6>
                <h6>Thank you for choosing Little Lemon!</h6>
                <button onClick={handleButtonClick}>Back to Home</button>
            </div>
        </>
    )
}

export default ConfirmedBooking;