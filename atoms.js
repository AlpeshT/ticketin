import { atom, selector } from 'recoil';
import { mockFetchEvents, mockFetchQuestions } from './mockApi';

// Atom to hold the list of events
export const eventListState = atom({
    key: 'eventListState',
    default: [],
});

// Selector to fetch events (mock API call)
export const fetchEvents = selector({
    key: 'fetchEvents',
    get: () => {
        const response = mockFetchEvents();
        return response;
    },
});
// Atom to hold the list of questions
export const questionListState = atom({
    key: 'questionListState',
    default: [],
});

// Selector to fetch questions (mock API call)
export const fetchQuestions = selector({
    key: 'fetchQuestions',
    get: () => {
        const response = mockFetchQuestions();
        return response;
    },
});