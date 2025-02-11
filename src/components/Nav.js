import Logo from '../images/Logo.svg';

const Nav = () => {
    return (
        <nav className='nav-bar'>
            <ul>
                <li><img src={Logo} alt="Logo"></img></li>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;