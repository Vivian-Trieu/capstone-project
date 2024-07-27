import {useState, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import '../styles/bookingpage.css';
import Nav from './Nav';

// const fetchTimes = (date) => {
//     if (window.fetchAPI) {
//         return window.fetchAPI(date);
//     } else {
//         console.error('fetchAPI is not available.');
//         return [];
//     }
// }

export const initializeTimes = () => {
    const today = new Date();
    if (window.fetchAPI) {
        return window.fetchAPI(today);
    } else {
        console.error('fetchAPI is not available.');
        return [];
    }
}

export const updateTimes = (state, action) => {
    switch(action.type) {
        case 'UPDATE_TIMES':
            if (window.fetchAPI) {
                return window.fetchAPI(new Date(action.date));
            } else {
                console.error('fetchAPI is not available.');
                return [];
            }
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
        const now = new Date();
        const currentTime = now.getHours() * 100 + now.getMinutes();
        const isToday = date.value === `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

        if (!date.value) {
            return availableTimes;
        }
        const bookedTimes = bookingData
            .filter(booking => booking.date === date.value)
            .map(booking => booking.time);

        const validTimes = availableTimes.filter(time => {
            const [hour, minute] = time.split(':').map(Number);
            const timeInMinutes = hour * 100 + minute;
            return !bookedTimes.includes(time) && (!isToday || timeInMinutes >= currentTime);
        })
        return validTimes;
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