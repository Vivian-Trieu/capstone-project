import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ErrorMessage = ({ message }) => {
    return (
        <p className='FieldError'>{message}</p>
    );
}

const BookingForm = ({
    date = { value: '', isTouched: false },
    setDate,
    time = {value: '', isTouched: false },
    setTime,
    guests = {value: '', isTouched: false },
    setGuests,
    occasion = '',
    setOccasion,
    availableTimes = [],
    dispatch,
    onSubmit
}) => {

    const getDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const formatTime = (time) => {
        const [hour, minute] = time.split(':');
        const hourNum = parseInt(hour, 10);
        const period = hourNum >= 12 ? 'PM' : 'AM';
        const formattedHour = hourNum % 12 || 12;
        return `${formattedHour}:${minute} ${period}`;
    }

    const clearForm = (setDate, setTime, setGuests, setOccasion) => {
        setDate({
            value: '',
            isTouched: false
        });
        setTime({
            value: '',
            isTouched: false
        });
        setGuests({
            value: '',
            isTouched: false
        });
        setOccasion('');
    }

    const handleBlur = (setter) => (e) => {
        setter(prevState => ({
            ...prevState,
            isTouched: true,
        }));
    }

    const handleChange = (setter) => (e) => {
        const { value } = e.target;
        setter(prevState => ({
            ...prevState,
            value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date: date.value,
            time: time.value,
            guests: guests.value,
            occasion: occasion,
        };
        console.log('Data submitted:', formData);
        onSubmit(formData);
        clearForm(setDate, setTime, setGuests, setOccasion);
    }

    const getIsFormValid = (date, time, guests) => {
        return (
            date.value &&
            time.value &&
            guests.value >= 1 &&
            guests.value <= 10
        );
    }

    const getErrors = () => {
        const errors = {
            date: date.isTouched && !date.value ? 'Date is required!' : '',
            time: time.isTouched && !time.value ? 'Time is required!' : '',
            guests: guests.isTouched && (!guests.value || guests.value < 1 || guests.value > 10) ? 'Guest number must be between 1 and 10!' : '',
        };
        return errors;
    }

    const errors = getErrors();

    return (
        <form onSubmit={handleSubmit} aria-label="Booking Form">
            <div className="form-grid">
                <div className="form-element">
                    <label htmlFor="res-date">Date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={date.value}
                        min={getDate()}
                        onChange={(e) =>{
                            handleChange(setDate)(e);
                            dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
                        }}
                        onBlur={handleBlur(setDate)}
                        aria-label="Select Date"
                    />
                    {errors.date && <ErrorMessage message={errors.date} />}
                </div>

                <div className="form-element">
                    <label htmlFor="res-time">Time</label>
                    <select
                        id="res-time"
                        value={time.value}
                        onChange={handleChange(setTime)}
                        onBlur={handleBlur(setTime)}
                        aria-label="Select Time"
                    >
                        <option value="" disabled hidden>
                            Select Time
                        </option>
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>{formatTime(time)}</option>
                        ))};
                    </select>
                    {errors.time && <ErrorMessage message={errors.time} />}
                </div>

                <div className="form-element">
                    <label htmlFor="guests">Number of Diners</label>
                    <input
                        type="number"
                        id="guests"
                        placeholder="No. of Diners"
                        min="1"
                        max="10"
                        value={guests.value}
                        onChange={handleChange(setGuests)}
                        onBlur={handleBlur(setGuests)}
                        aria-label="Number of Diners"
                    />
                    {errors.guests && <ErrorMessage message={errors.guests} />}
                </div>

                <div className="form-element">
                    <label htmlFor="occasion">Occasion<span> (Optional)</span></label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        aria-label="Select Occasion"
                    >
                        <option value="" disabled hidden>Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>
            </div>
            <input className="submit-button" type="submit" disabled={!getIsFormValid(date, time, guests)} value="Make reservation" aria-label="Make reservation"/>
        </form>
    );
}

export default BookingForm;