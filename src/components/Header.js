import Food from '../images/restaurantfood.jpg';

const Header = () => {
    return (
        <header>
            <div class='content'>
                <div class='callToAction'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <h6>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern
                        twist.
                    </h6>
                    <button>Reserve a Table</button>
                </div>
                <img src={Food} alt="Food"></img>
            </div>
        </header>
    )
}

export default Header;