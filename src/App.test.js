import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from '../src/components/BookingForm';
import { initializeTimes, updateTimes } from '../src/components/BookingPage';

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Date");
  expect(headingElement).toBeInTheDocument();
})

describe('initializeTimes', () => {
  it('should return the initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const times = initializeTimes();
    expect(times).toEqual(expectedTimes);
  });
});

describe('updatedTimes', () => {
  it('should return the same state when no valid action is provided', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const state = updateTimes(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should return the same state when UPDATE_TIMES action is provided', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', date: '2024-07-26' };
    const state = updateTimes(initialState, action);
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expect(state).toEqual(expectedTimes);
  });
});

describe('BookingForm HTML5 validation attributes', () => {
  const getDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  test('Date input should have min attribute set to current date', () => {
    render(<BookingForm />);
    const today = getDate();
    const dateInput = screen.getByLabelText(/Date/i);
    expect(dateInput).toHaveAttribute('min', today);
  });

  test('Time select should have a default disabled hidden option', () => {
    render(<BookingForm />);
    const timeSelect = screen.getByLabelText(/Time/i);
    expect(timeSelect).toHaveTextContent('Select Time');
    expect(timeSelect.options[0]).toHaveAttribute('disabled');
    expect(timeSelect.options[0]).toHaveAttribute('hidden');
  });

  test('Guests input should have min and max attributes set to 1 and 10', () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText(/Number of Diners/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  })

  test('Occasion select should have a default disabled hidden option', () => {
    render(<BookingForm />);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toHaveTextContent('Occasion');
    expect(occasionSelect.options[0]).toHaveAttribute('disabled');
    expect(occasionSelect.options[0]).toHaveAttribute('hidden');
  });
});

describe('BookingForm validation functions', () => {
  const setUp = (date = '', time = '', guests = 1) => {
    const setDate = jest.fn();
    const setTime = jest.fn();
    const setGuests = jest.fn();
    const setOccasion = jest.fn();
    const onSubmit = jest.fn();
    const dispatch = jest.fn();

    render(
      <BookingForm
        date={{ value: date, isTouched: true }}
        setDate={setDate}
        time={{ value: time, isTouched: true }}
        setTime={setTime}
        guests={{ value: guests, isTouched: true }}
        setGuests={setGuests}
        occasion=""
        setOccasion={setOccasion}
        availableTimes={['17:00', '18:00']}
        dispatch={dispatch}
        onSubmit={onSubmit}
      />
    );
  };

  test('getIsFormValid should return true for valid form', () => {
    setUp('2024-07-26', '17:00', 4);
    const submitButton = screen.getByText('Make reservation');
    expect(submitButton).not.toBeDisabled();
  });

  test('getIsFormValid should return false for invalid form', () => {
    setUp('', '', 0);
    const submitButton = screen.getByText('Make reservation');
    expect(submitButton).toBeDisabled();
  });

  test('getErrors should return correct error messages', () => {
    setUp('', '15:00', 0);
    const dateError = screen.getByText('Date is required!');
    const guestsError = screen.getByText('Guest number must be between 1 and 10!');
    expect(dateError).toBeInTheDocument();
    expect(guestsError).toBeInTheDocument();
  });

  test('getErrors should return no error messages for valid inputs', () => {
    setUp('2025-07-27', '17:00', 4);
    const dateError = screen.queryByText('Date is required!');
    const guestsError = screen.queryByText('Guest number must be between 1 and 10!');
    expect(dateError).toBeNull();
    expect(guestsError).toBeNull();
  });

});


