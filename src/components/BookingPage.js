import {useState, useReducer } from 'react';
import BookingForm from './BookingForm';
import '../styles/bookingpage.css';
import Nav from './Nav';

export const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export const updateTimes = (state, action) => {
    switch(action.type) {
        case 'UPDATE_TIMES':
            return state;
        default:
            return state;
    }
}

const BookingPage = () => {
    const [date, setDate] = useState({
        value: '',
        isTouched: false,
    });
    const [time, setTime] = useState({
        value: '',
        isTouched: false,
    });
    const [guests, setGuests] = useState({
        value: '',
        isTouched: false,
    });
    const [occasion, setOccasion] = useState('');

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <>
            <Nav />
            <h1>Reservations</h1>
            <div className="form-container">
                <BookingForm
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    guests={guests}
                    setGuests={setGuests}
                    occasion={occasion}
                    setOccasion={setOccasion}
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                />
            </div>
        </>
    )
}

export default BookingPage;