import { render, screen } from "@testing-library/react";
import BookingForm from '../src/components/BookingForm';
import { initializeTimes, updateTimes } from '../src/components/BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Date");
    expect(headingElement).toBeInTheDocument();
})

// describe('initializeTimes', () => {
//   it('should return the initial times', () => {
//     const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//     const times = initializeTimes();
//     expect(times).toEqual(expectedTimes);
//   });
// });

describe('updatedTimes', () => {
  it('should return the same state when no valid action is provided', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const state = updateTimes(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should return the same state when UPDATE_TIMES action is provided', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE_TIMES', date: '2023-10-' };
    const state = updateTimes(initialState, action);
    expect(state).toEqual(initialState);
  });
});


