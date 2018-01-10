import {setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('generate setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual ({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('generate setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual ({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('generate sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual ({
        type: 'SORT_BY_DATE'
    });
});

test('generate sortByAmount action object', () => {
    expect(sortByAmount()).toEqual ({type: 'SORT_BY_AMOUNT'});
});

test('generate setTextFilter action object', () => {
    const text = 'whatev';
    const action = setTextFilter(text);
    expect(action).toEqual ({
        type: 'SET_TEXT_FILTER',
        text: text
    });
});

test('generate setTextFilter action object default', () => {
    const action = setTextFilter();
    expect(action).toEqual ({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});