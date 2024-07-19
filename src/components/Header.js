import Food from '../images/restaurant_food.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/booking');
    }

    return (
        <header>
            <div className="content">
                <div className="callToAction">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <h6>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern
                        twist.
                    </h6>
                    <button onClick={handleButtonClick}>Reserve a Table</button>
                </div>
                <img src={Food} alt="Food"></img>
            </div>
        </header>
    )
}

export default Header;