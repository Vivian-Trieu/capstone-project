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

    
    const navigate = useNavigate();

    useEffect(() => {
        if (date.isTouched) {
            dispatch({ type: 'UPDATE_TIMES', date: date.value });
        }
    }, [date]);

    const submitForm = (formData) => {
        if (window.submitAPI && window.submitAPI(formData)){
            navigate('/confirmed');
            return true;
        } else {
            console.error('Submission failed');
            return false;
        }
    }

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
                    onSubmit={submitForm}
                />
            </div>
        </>
    )
}

export default BookingPage;