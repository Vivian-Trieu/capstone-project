import {useState, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import '../styles/bookingpage.css';
import Nav from './Nav';

const fetchTimes = (date) => {
    if (window.fetchAPI) {
        return window.fetchAPI(date);
    } else {
        console.error('fetchAPI is not available.');
        return [];
    }
}

export const initializeTimes = () => {
    const today = new Date();
    return fetchTimes(today);
}

export const updateTimes = (state, action) => {
    switch(action.type) {
        case 'UPDATE_TIMES':
            return fetchTimes(new Date(action.date));
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

    const [bookingData, setBookingData] = useState((() => {
        const storedData = localStorage.getItem('bookingData');
        return storedData ? JSON.parse(storedData) : [];
    }));

    const navigate = useNavigate();

    useEffect(() => {
        if (date.isTouched) {
            dispatch({ type: 'UPDATE_TIMES', date: date.value });
        }
    }, [date]);

    const submitForm = (formData) => {
        if (window.submitAPI && window.submitAPI(formData)){
            const updatedBookingData = [...bookingData, formData]

            setBookingData(updatedBookingData);
            localStorage.setItem('bookingData', JSON.stringify(updatedBookingData));
            console.log('Booking Data:', updatedBookingData);
            dispatch({ type: 'UPDATE_TIMES', date: formData.date })
            navigate('/confirmed');
            return true;
        } else {
            console.error('Submission failed');
            return false;
        }
    }

    const getFilteredTimes = () => {
        if (!date.value) {
            return availableTimes;
        }
        const bookedTimes = bookingData
            .filter(booking => booking.date === date.value)
            .map(booking => booking.time);
        return availableTimes.filter(time => !bookedTimes.includes(time));
    };

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
                    availableTimes={getFilteredTimes()}
                    dispatch={dispatch}
                    onSubmit={submitForm}
                />
            </div>
        </>
    )
}

export default BookingPage;