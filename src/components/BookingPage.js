import BookingForm from './BookingForm';
import '../styles/bookingpage.css';
import Nav from './Nav';



const BookingPage = () => {
    return (
        <>
            <Nav />
            <div className="form-container">
                <BookingForm/>
            </div>
        </>
    )
}

export default BookingPage;