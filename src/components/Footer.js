import FooterLogo from '../images/footer_logo.png'

const Footer = () => {
    return (
        <footer>
            <img src={FooterLogo} alt="Footer logo" />
            <div className="link-column">
                <h5>Navigation</h5>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="/booking">Reservations</a></li>
                        <li><a href="#order-online">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </nav>
            </div>
            <div className="link-column">
                <h5>Contact</h5>
                <h6>123 Lemon Grove Ave</h6>
                <h6>littlelemon@email.com</h6>
                <h6>(312) 555-1234</h6>
            </div>
            <div className="link-column">
            <h5>Social Media</h5>
                <nav>
                    <ul>
                        <li><a href="#instagram">Instagram</a></li>
                        <li><a href="#twitter">Twitter</a></li>
                        <li><a href="#facebook">Facebook</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;